import { ApiMethod, Type } from '../config/types';

/**
 * Utility class for validation logic
 */
export class Validator {
  static isValidTypeName(name: string): boolean {
    if (!name) return false;
    if (!/^[A-Z][a-zA-Z]+$/.test(name)) return false;
    if (name.length < 2) return false;
    if (/\d/.test(name)) return false;
    if (name.length > 40) return false;
    const badPatterns = [
      /^AnArrayOf/i,
      /^TheNew/i,
      /^TheEdited/i,
      /^TheRevoked/i,
      /^InformationAbout/i,
      /^TheListOf/i,
      /^TheAmountOf/i,
      /^TheGifts/i,
      /^TheUploaded/i,
      /^BasicInformation/i,
    ];
    for (const pattern of badPatterns) {
      if (pattern.test(name)) return false;
    }
    return true;
  }
  static isValidMethodName(name: string): boolean {
    if (!name) return false;
    if (!/^[a-z]/.test(name)) return false;
    if (name.length < 3) return false;
    return true;
  }
  static shouldUseParamsObject(method: ApiMethod): boolean {
    const requiredParams = method.parameters.filter((p) => p.required);
    const totalParams = method.parameters.length;
    if (requiredParams.length > 3) return true;
    if (totalParams > 4) return true;
    const optionalParams = method.parameters.filter((p) => !p.required);
    const hasManyBooleanOpts =
      optionalParams.filter((p) =>
        p.types.some((t) => t.includes('boolean') || t.includes('number'))
      ).length > 2;
    if (hasManyBooleanOpts) return true;
    return false;
  }
  static isSemanticallyCompatible(method: ApiMethod, type: Type): boolean {
    const typeNameLower = type.name.toLowerCase();
    const methodNameLower = method.name.toLowerCase();
    const returnTypeClean = method.returnType.replace('[]', '').toLowerCase();
    if (returnTypeClean === typeNameLower) return true;
    for (const param of method.parameters) {
      for (const typeName of param.types) {
        if (typeName.replace('[]', '').toLowerCase() === typeNameLower) return true;
      }
    }
    if (methodNameLower.includes(typeNameLower) || typeNameLower.includes(methodNameLower))
      return true;
    const semanticPatterns = [
      { method: /^send/, type: /message/i },
      { method: /^edit/, type: /message/i },
      { method: /^forward/, type: /message/i },
      { method: /^get/, type: /chat/i },
      { method: /^send/, type: /photo/i },
      { method: /^send/, type: /document/i },
      { method: /^send/, type: /video/i },
    ];
    for (const pattern of semanticPatterns) {
      if (pattern.method.test(methodNameLower) && pattern.type.test(typeNameLower)) return true;
    }
    return false;
  }
}
