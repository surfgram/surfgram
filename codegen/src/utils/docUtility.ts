/**
 * Utility class for escaping and example values
 */
export class DocUtility {
  static escapeDocString(text: string): string {
    if (!text) return '';
    return text
      .replace(/\\/g, '\\\\')
      .replace(/\*/g, '\\*')
      .replace(/\`/g, '\\`')
      .replace(/_/g, '\\_')
      .replace(/\|/g, '\\|')
      .replace(/\{/g, '\\{')
      .replace(/\}/g, '\\}')
      .replace(/\[/g, '\\[')
      .replace(/\]/g, '\\]')
      .replace(/\(/g, '\\(')
      .replace(/\)/g, '\\)')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, ' ')
      .trim();
  }

  static getExampleValue(type: string): string {
    if (!type) return '{} as any';
    if (type.endsWith('[]')) {
      const innerType = type.slice(0, -2);
      const innerValue = DocUtility.getExampleValue(innerType);
      return `[${innerValue}]`;
    }
    const cleanType = type.toLowerCase();
    if (cleanType === 'string') return '"example text"';
    if (cleanType === 'number' || cleanType === 'integer' || cleanType === 'int') return '123';
    if (cleanType === 'boolean') return 'true';
    if (cleanType === 'true') return 'true';
    if (cleanType === 'false') return 'false';
    return '{} as any';
  }
}
