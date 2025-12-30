import { resolve } from 'path';
import { BaseGenerator } from './baseGenerator';
import { Validator } from '../utils/validator';

export class IndexGenerator extends BaseGenerator {
  generate() {
    this.writeFile(
      resolve(this.outDir, 'index.ts'),
      this.renderTemplate('index.ts.njk', {
        types: Object.values(this.types).filter((t) => Validator.isValidTypeName(t.name)),
      })
    );
    this.writeFile(
      resolve(this.outDir, '../index.ts'),
      this.renderTemplate('main_index.ts.njk', {
        types: Object.values(this.types).filter((t) => Validator.isValidTypeName(t.name)),
      })
    );
  }
}
