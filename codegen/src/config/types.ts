export interface Field {
  name: string;
  types: string[];
  required: boolean;
  description: string;
  originalType: string;
}

export interface Type {
  originalName: string;
  name: string;
  fileName: string;
  description: string;
  fields?: Field[];
}

export interface ApiMethod {
  name: string;
  description: string;
  parameters: Field[];
  returnType: string;
  directParameters?: string[];
}

export interface ContextualMapping {
  parameterName: string;
  fieldPath: string;
  isOptional: boolean;
  similarityScore: number;
}
