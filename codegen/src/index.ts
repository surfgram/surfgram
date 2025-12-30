import { resolve } from 'path';
import {
  env,
  TYPES_DIR_NAME,
  METHODS_DIR_NAME,
  FLUENT_DIR_NAME,
  INTERFACES_DIR_NAME,
  DOCS_DIR_NAME,
  TESTS_DIR_NAME,
} from './config/constants';
import { Parser } from './parser/parser';
import { FileSystemUtility } from './utils/fileSystemUtility';
import { TypeGenerator } from './generators/typeGenerator';
import { InterfaceGenerator } from './generators/interfaceGenerator';
import { MethodGenerator } from './generators/methodGenerator';
import { FluentGenerator } from './generators/fluentGenerator';
import { DocGenerator } from './generators/docGenerator';
import { TestGenerator } from './generators/testGenerator';
import { IndexGenerator } from './generators/indexGenerator';
import { DocUtility } from './utils/docUtility';
import { CaseConverter } from './utils/caseConverter';

env.addFilter('docsafe', DocUtility.escapeDocString);
env.addFilter('camelToSnake', CaseConverter.camelToSnake);
env.addFilter('lower', (str: string) => (str ? str.toLowerCase() : ''));
env.addFilter('map', (array: any[], property: string) => {
  if (!array || !Array.isArray(array)) return [];
  return array.map((item) => {
    if (property && item && typeof item === 'object') {
      return item[property];
    }
    return item;
  });
});
env.addFilter('startsWith', (str: string, prefix: string) => {
  return str && str.startsWith(prefix);
});

/**
 * Main orchestrator class
 */
class GeneratorOrchestrator {
  private out: string;
  private typesOut: string;
  private methodsOut: string;
  private fluentOut: string;
  private interfacesOut: string;
  private docsOut: string;
  private testsOut: string;
  private testsTypesOut: string;
  private testsMethodsOut: string;

  constructor() {
    this.out = resolve(process.cwd(), '../src/api');
    this.typesOut = resolve(this.out, TYPES_DIR_NAME);
    this.methodsOut = resolve(this.out, METHODS_DIR_NAME);
    this.fluentOut = resolve(this.out, FLUENT_DIR_NAME);
    this.interfacesOut = resolve(this.out, INTERFACES_DIR_NAME);
    this.docsOut = resolve(this.out, DOCS_DIR_NAME);
    this.testsOut = resolve(this.out, TESTS_DIR_NAME);
    this.testsTypesOut = resolve(this.testsOut, 'types');
    this.testsMethodsOut = resolve(this.testsOut, 'methods');
  }

  async run() {
    const parser = new Parser();
    await parser.fetchAPI();
    const { types, methods } = parser.parseTypesAndMethods();

    FileSystemUtility.ensureDirectories([
      this.out,
      this.typesOut,
      this.methodsOut,
      this.fluentOut,
      this.interfacesOut,
      this.docsOut,
      this.testsOut,
      this.testsTypesOut,
      this.testsMethodsOut,
    ]);

    FileSystemUtility.cleanDirectory(this.typesOut);
    FileSystemUtility.cleanDirectory(this.methodsOut);
    FileSystemUtility.cleanDirectory(this.fluentOut);
    FileSystemUtility.cleanDirectory(this.interfacesOut);
    FileSystemUtility.cleanDirectory(this.testsTypesOut);
    FileSystemUtility.cleanDirectory(this.testsMethodsOut);

    new TypeGenerator(types, methods, this.out).generate();
    new InterfaceGenerator(types, methods, this.out).generate();
    new MethodGenerator(types, methods, this.out).generate();
    new FluentGenerator(types, methods, this.out).generate();
    new DocGenerator(types, methods, this.out).generate();
    new TestGenerator(types, methods, this.out).generate();
    new IndexGenerator(types, methods, this.out).generate();

    FileSystemUtility.renameToCamelCase([this.typesOut, this.interfacesOut]);
    console.log('Done');
  }
}

new GeneratorOrchestrator().run().catch(console.error);
