import { BASE_TYPE_MAP } from '../config/constants';
import { Validator } from './validator';

/**
 * Utility class for type normalization
 */
export class TypeNormalizer {
  static findMatchingType(typeName: string, allTypeNames: string[]): string | null {
    if (!typeName) return null;
    const cleanName = typeName.trim();
    if (allTypeNames.includes(cleanName)) return cleanName;
    const lowerCleanName = cleanName.toLowerCase();
    for (const existingType of allTypeNames) {
      if (existingType.toLowerCase() === lowerCleanName) return existingType;
    }
    return null;
  }

  static normalizeTelegramType(
    type: string,
    allTypeNames: string[]
  ): { types: string[]; original: string } {
    const original = type.trim();

    let arrayLevel = 0;
    let currentType = original;

    while (true) {
      const arrayMatch = currentType.match(/^(?:Array|List)\s+of\s+(.+)$/i);
      if (arrayMatch) {
        arrayLevel++;
        currentType = arrayMatch[1].trim();
      } else {
        break;
      }
    }

    const variants = currentType
      .split(/\s+or\s+|\s*\|\s*/i)
      .map((v) => v.trim())
      .filter((v) => v && v !== 'or');

    const resultTypes: string[] = [];

    for (let variant of variants) {
      variant = variant.replace(/Optional\.?>/gi, '').trim();
      const lowerVariant = variant.toLowerCase();

      if (lowerVariant === 'true' || lowerVariant === 'false') {
        let typeName = 'boolean';

        for (let i = 0; i < arrayLevel; i++) {
          typeName += '[]';
        }
        resultTypes.push(typeName);
        continue;
      } else if (['integer', 'int', 'float', 'float number'].includes(lowerVariant)) {
        let typeName = 'number';
        for (let i = 0; i < arrayLevel; i++) {
          typeName += '[]';
        }
        resultTypes.push(typeName);
        continue;
      } else if (lowerVariant === 'boolean') {
        let typeName = 'boolean';
        for (let i = 0; i < arrayLevel; i++) {
          typeName += '[]';
        }
        resultTypes.push(typeName);
        continue;
      } else if (lowerVariant === 'string') {
        let typeName = 'string';
        for (let i = 0; i < arrayLevel; i++) {
          typeName += '[]';
        }
        resultTypes.push(typeName);
        continue;
      }

      const matchingType = TypeNormalizer.findMatchingType(variant, allTypeNames);

      if (matchingType) {
        let typeName = matchingType;

        for (let i = 0; i < arrayLevel; i++) {
          typeName += '[]';
        }
        resultTypes.push(typeName);
        continue;
      }

      if (/^[A-Z][a-z]+([A-Z][a-z]+)*$/.test(variant) && Validator.isValidTypeName(variant)) {
        let typeName = variant;
        for (let i = 0; i < arrayLevel; i++) {
          typeName += '[]';
        }
        resultTypes.push(typeName);
        continue;
      }

      let typeName = 'any';
      for (let i = 0; i < arrayLevel; i++) {
        typeName += '[]';
      }
      resultTypes.push(typeName);
    }

    const uniqueTypes = [...new Set(resultTypes.filter((t) => t))];
    if (uniqueTypes.length === 0) {
      let typeName = 'any';
      for (let i = 0; i < arrayLevel; i++) {
        typeName += '[]';
      }
      return { types: [typeName], original };
    }

    return { types: uniqueTypes, original };
  }

  static resolveTsType(types: string[]): string {
    const uniqueTypes = Array.from(
      new Set(
        types.map((t) => {
          const clean = t.replace(/\[\]$/g, '');
          if (clean === 'true' || clean === 'false') return 'boolean';
          if (BASE_TYPE_MAP[clean]) {
            const arrayMatch = t.match(/\[\]$/g);
            const arrayCount = arrayMatch ? arrayMatch.length : 0;
            let result = BASE_TYPE_MAP[clean];
            for (let i = 0; i < arrayCount; i++) {
              result += '[]';
            }
            return result;
          }
          return t;
        })
      )
    ).filter((v, i, s) => s.indexOf(v) === i);

    return uniqueTypes.length > 0 ? uniqueTypes.join(' | ') : 'any';
  }
}
