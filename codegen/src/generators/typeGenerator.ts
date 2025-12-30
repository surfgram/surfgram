import { resolve } from 'path';
import { BaseGenerator } from './baseGenerator';
import { Type } from '../config/types';
import { TYPES_DIR_NAME, BASE_TYPE_MAP } from '../config/constants';
import { Validator } from '../utils/validator';
import { CaseConverter } from '../utils/caseConverter';
import { TypeNormalizer } from '../utils/typeNormalizer';

export class TypeGenerator extends BaseGenerator {
  private extractTypeNamesFromTsType(tsType: string): string[] {
    const typeNames: string[] = [];

    if (!tsType) return typeNames;

    const parts = tsType.split(/[|&]/).map((p) => p.trim());

    for (const part of parts) {
      const baseType = part.replace(/\[\]/g, '');

      if (
        baseType &&
        /^[A-Z][a-zA-Z]*$/.test(baseType) &&
        !['String', 'Number', 'Boolean', 'Any', 'True', 'False'].includes(baseType)
      ) {
        typeNames.push(baseType);
      }
    }
    return typeNames;
  }

  private getImportsForType(type: Type, allTypeNames: string[]): { name: string; file: string }[] {
    const imports = new Set<string>();

    if (!type.fields) {
      return Array.from(imports).map((name) => ({
        name,
        file: CaseConverter.toCamelCaseFileName(name).replace('.ts', ''),
      }));
    }

    if (type.name === 'InlineKeyboardMarkup') {
      if (type.fields) {
        type.fields.forEach((field, i) => {});
      }
    }

    for (const field of type.fields) {
      const tsType = TypeNormalizer.resolveTsType(field.types);

      const typeNames = this.extractTypeNamesFromTsType(tsType);

      for (const typeName of typeNames) {
        if (
          !typeName ||
          typeName === 'any' ||
          BASE_TYPE_MAP[typeName] ||
          ['string', 'number', 'boolean', 'true', 'false', 'null', 'undefined'].includes(
            typeName.toLowerCase()
          )
        ) {
          continue;
        }

        const foundType = allTypeNames.find((t) => t === typeName);
        if (foundType && foundType !== type.name) {
          imports.add(foundType);
        }
      }
    }

    const result = Array.from(imports).map((name) => ({
      name,
      file: CaseConverter.toCamelCaseFileName(name).replace('.ts', ''),
    }));

    return result;
  }

  generate() {
    console.log('Generating types...');
    const typesOut = resolve(this.outDir, TYPES_DIR_NAME);

    this.writeFile(
      resolve(typesOut, 'telegramObject.ts'),
      this.renderTemplate('telegram_object.ts.njk', {})
    );

    const allTypeNames = Object.values(this.types)
      .map((t) => t.name)
      .filter((name) => name && Validator.isValidTypeName(name));

    for (const type of Object.values(this.types)) {
      if (!Validator.isValidTypeName(type.name)) continue;

      const imports = this.getImportsForType(type, allTypeNames);

      const data = {
        type,
        fileName: type.fileName.replace('.ts', ''),
        imports,
        fields: (type.fields || []).map((f) => ({
          ...f,
          tsType: TypeNormalizer.resolveTsType(f.types),
          requiredMark: f.required ? '!' : '?',
        })),
      };

      const content = this.renderTemplate('type.ts.njk', data);
      this.writeFile(resolve(typesOut, type.fileName), content);
    }
  }
}
