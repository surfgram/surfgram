import { writeFileSync } from 'fs';
import { env } from '../config/constants';
import { Type, ApiMethod } from '../config/types';

/**
 * Abstract base class for generators
 */
export abstract class BaseGenerator {
  protected types: Record<string, Type>;
  protected methods: Record<string, ApiMethod>;
  protected allTypeNames: string[];
  protected outDir: string;

  constructor(types: Record<string, Type>, methods: Record<string, ApiMethod>, outDir: string) {
    this.types = types;
    this.methods = methods;
    this.allTypeNames = Object.values(types).map((t) => t.name);
    this.outDir = outDir;
  }

  protected renderTemplate(template: string, data: any): string {
    return env.render(template, data);
  }

  protected writeFile(path: string, content: string) {
    writeFileSync(path, content);
  }

  abstract generate(): void;
}
