/**
 * Utility class for case conversions and normalizations
 */
export class CaseConverter {
  static normalizeFieldName(name: string): string {
    if (/^[a-z]+[A-Z]/.test(name)) return name;
    return name.replace(/(_[a-z])/g, (match) => match[1].toUpperCase());
  }

  static toCamelCaseFileName(name: string): string {
    if (!name) return '';
    if (/^[a-z]/.test(name)) return name + '.ts';
    return name.charAt(0).toLowerCase() + name.slice(1) + '.ts';
  }

  static normalizeFileName(name: string): string {
    return CaseConverter.toCamelCaseFileName(name);
  }

  static toKebabCase(str: string): string {
    return str
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/[\s_]+/g, '-')
      .toLowerCase();
  }

  static toCamelCase(str: string): string {
    if (!str) return '';
    const cleaned = str.replace(/[^a-zA-Z0-9_]/g, '');
    return cleaned.replace(/[-_]([a-z])/g, (match, letter) => letter.toUpperCase());
  }

  static camelToSnake(camel: string): string {
    return camel.replace(/([A-Z])/g, '_$1').toLowerCase();
  }
}
