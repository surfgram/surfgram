import { Type, ApiMethod, ContextualMapping, Field } from "../config/types";
import { Validator } from "./validator";
import { CaseConverter } from "../utils/caseConverter";

/**
 * Utility class for contextual mappings
 */
export class MappingUtility {
    private static readonly ID_SUFFIXES = ["id", "_id"];
    private static readonly NON_OBJECT_ID_TYPES = [
        /effectid$/i,
        /themeid$/i,
        /nameid$/i,
        /customid$/i,
        /settingid$/i,
        /optionid$/i,
        /stickerid$/i,
        /setid$/i,
        /fileid$/i,
    ];

    /**
     * Find contextual mappings between type fields and method parameters,
     * including type-specific ID mappings
     */
    static findContextualMappings(
        type: Type,
        method: ApiMethod,
    ): ContextualMapping[] {
        if (!type.fields || type.fields.length === 0) return [];

        const mappings: ContextualMapping[] = [];
        const typeFields = type.fields;
        const fieldPaths = this.buildFieldPaths(typeFields);
        const typeNameLower = type.name.toLowerCase();
        const snakeTypeName = CaseConverter.camelToSnake(type.name);

        const idParameters = method.parameters.filter((param) => {
            const paramNameLower = param.name.toLowerCase();
            return (
                this.isIdField(paramNameLower) &&
                !this.isNonObjectIdType(paramNameLower)
            );
        });

        // First, handle type-specific ID mappings
        this.addTypeSpecificIdMappings(
            typeNameLower,
            snakeTypeName,
            method.parameters,
            mappings
        );

        for (const param of idParameters) {
            const paramNameLower = param.name.toLowerCase();

            // Skip if already mapped as type-specific ID
            if (this.isTypeSpecificIdAlreadyMapped(param.name, mappings)) {
                continue;
            }

            let mapping = this.findDirectMapping(fieldPaths, paramNameLower);

            if (!mapping.path) {
                mapping = this.findIndirectMapping(
                    fieldPaths,
                    paramNameLower,
                    typeFields,
                    typeNameLower,
                    snakeTypeName,
                );
            }

            if (!mapping.path) {
                mapping = this.findTypeBasedMapping(
                    typeFields,
                    paramNameLower,
                    typeNameLower,
                );
            }

            if (!mapping.path) {
                mapping = this.findGenericIdMapping(
                    typeFields,
                    paramNameLower,
                    typeNameLower,
                    snakeTypeName,
                );
            }

            if (mapping.path && mapping.score > 0.3) {
                const safePath = this.makePathSafe(mapping.path);

                mappings.push({
                    parameterName: param.name,
                    fieldPath: safePath,
                    isOptional: true,
                    similarityScore: mapping.score,
                });
            }
        }

        return mappings.sort((a, b) => b.similarityScore - a.similarityScore);
    }

    /**
     * Add type-specific ID mappings (e.g., user_id for User type)
     */
    private static addTypeSpecificIdMappings(
        typeNameLower: string,
        snakeTypeName: string,
        parameters: ApiMethod['parameters'],
        mappings: ContextualMapping[]
    ): void {
        const typeIdPatterns = [
            `${typeNameLower}_id`,
            `${typeNameLower}id`,
            `${snakeTypeName}_id`,
            `${snakeTypeName}id`,
        ];

        for (const param of parameters) {
            const paramNameLower = param.name.toLowerCase();
            
            if (this.isIdField(paramNameLower) && 
                typeIdPatterns.some(pattern => paramNameLower === pattern)) {
                
                // Check if this parameter is already mapped
                if (!mappings.some(m => m.parameterName === param.name)) {
                    mappings.push({
                        parameterName: param.name,
                        fieldPath: "this.id",
                        isOptional: true,
                        similarityScore: 1.0,
                    });
                }
            }
        }
    }

    private static isTypeSpecificIdAlreadyMapped(
        paramName: string,
        mappings: ContextualMapping[]
    ): boolean {
        return mappings.some(m => m.parameterName === paramName && m.fieldPath === "this.id");
    }

    private static buildFieldPaths(fields: Field[]): Map<string, string> {
        const fieldPaths = new Map<string, string>();

        const buildPathsRecursive = (fields: Field[], prefix = ""): void => {
            for (const field of fields) {
                const fullPath = prefix ? `${prefix}.${field.name}` : field.name;

                fieldPaths.set(field.name.toLowerCase(), fullPath);

                const snakeName = CaseConverter.camelToSnake(field.name);
                if (snakeName !== field.name.toLowerCase()) {
                    fieldPaths.set(snakeName, fullPath);
                }

                if (this.isObjectType(field)) {
                    this.addIdMappingsForObject(field, fieldPaths, fullPath);
                }
            }
        };

        buildPathsRecursive(fields);
        return fieldPaths;
    }

    private static addIdMappingsForObject(
        field: Field,
        fieldPaths: Map<string, string>,
        fullPath: string,
    ): void {
        const fieldNameLower = field.name.toLowerCase();
        const snakeName = CaseConverter.camelToSnake(field.name);

        for (const suffix of this.ID_SUFFIXES) {
            const camelId = fieldNameLower.endsWith("id")
                ? fieldNameLower
                : `${fieldNameLower}${suffix}`;
            fieldPaths.set(camelId, `${fullPath}.id`);

            if (snakeName !== fieldNameLower) {
                const snakeId = snakeName.endsWith("_id")
                    ? snakeName
                    : `${snakeName}${suffix === "id" ? "_id" : suffix}`;
                fieldPaths.set(snakeId, `${fullPath}.id`);
            }
        }
    }

    private static findDirectMapping(
        fieldPaths: Map<string, string>,
        paramNameLower: string,
    ): { path: string; score: number } {
        if (fieldPaths.has(paramNameLower)) {
            const path = `this.${fieldPaths.get(paramNameLower)}`;
            return { path, score: 1.0 };
        }
        return { path: "", score: 0 };
    }

    private static findIndirectMapping(
        fieldPaths: Map<string, string>,
        paramNameLower: string,
        typeFields: Field[],
        typeNameLower: string,
        snakeTypeName: string,
    ): { path: string; score: number } {
        for (const suffix of this.ID_SUFFIXES) {
            if (paramNameLower.endsWith(suffix)) {
                const baseName = paramNameLower.slice(0, -suffix.length);
                const cleanBaseName = baseName.endsWith("_")
                    ? baseName.slice(0, -1)
                    : baseName;

                if (
                    cleanBaseName === typeNameLower.replace(/_/g, "") ||
                    cleanBaseName === snakeTypeName.replace(/_/g, "")
                ) {
                    return { path: "this.id", score: 0.95 };
                }

                if (cleanBaseName && fieldPaths.has(cleanBaseName)) {
                    const fieldPath = fieldPaths.get(cleanBaseName)!;
                    const field = this.findFieldByName(typeFields, cleanBaseName);

                    if (field && this.isObjectType(field)) {
                        const path = `this.${fieldPath}.id`;
                        return { path, score: 0.9 };
                    }
                }

                if (cleanBaseName) {
                    const possibleField = this.findSimilarField(
                        typeFields,
                        cleanBaseName,
                    );
                    if (possibleField) {
                        const path = `this.${possibleField.name}.id`;
                        return { path, score: 0.8 };
                    }
                }
            }
        }

        return { path: "", score: 0 };
    }

    private static findTypeBasedMapping(
        typeFields: Field[],
        paramNameLower: string,
        typeNameLower: string,
    ): { path: string; score: number } {
        for (const field of typeFields) {
            if (this.isObjectType(field)) {
                const fieldType = field.types[0]?.replace("[]", "")?.toLowerCase();
                const paramWords = paramNameLower.split(/[_\s]+/);

                if (fieldType) {
                    const typeWords = fieldType
                        .split(/(?=[A-Z])/)
                        .map((w) => w.toLowerCase());
                    const hasMatch = typeWords.some((word) =>
                        paramWords.some(
                            (paramWord) =>
                                paramWord.includes(word) || word.includes(paramWord),
                        ),
                    );

                    if (hasMatch) {
                        return { path: `this.${field.name}.id`, score: 0.7 };
                    }
                }
            }
        }

        const paramWords = paramNameLower.split(/[_\s]+/);
        const typeWords = typeNameLower
            .split(/(?=[A-Z])/)
            .map((w) => w.toLowerCase());
        const typeWordMatches = typeWords.some((word) =>
            paramWords.some(
                (paramWord) => paramWord.includes(word) || word.includes(paramWord),
            ),
        );

        if (typeWordMatches && paramNameLower.includes("id")) {
            return { path: "this.id", score: 0.6 };
        }

        return { path: "", score: 0 };
    }

    private static findGenericIdMapping(
        typeFields: Field[],
        paramNameLower: string,
        typeNameLower: string,
        snakeTypeName: string,
    ): { path: string; score: number } {
        if (paramNameLower.includes("id") || paramNameLower.includes("Id")) {
            const objectName = paramNameLower
                .replace(/(id|_id)$/, "")
                .replace(/_/g, "")
                .toLowerCase();

            if (objectName) {
                if (
                    objectName.includes(typeNameLower.replace(/_/g, "")) ||
                    typeNameLower.replace(/_/g, "").includes(objectName) ||
                    objectName.includes(snakeTypeName.replace(/_/g, "")) ||
                    snakeTypeName.replace(/_/g, "").includes(objectName)
                ) {
                    return { path: "this.id", score: 0.55 };
                }

                const matchingFields = typeFields.filter(
                    (field) =>
                        this.isObjectType(field) &&
                        field.name.toLowerCase().includes(objectName),
                );

                if (matchingFields.length === 1) {
                    return { path: `this.${matchingFields[0].name}.id`, score: 0.5 };
                }
            }
        }

        return { path: "", score: 0 };
    }

    private static isObjectType(field: Field): boolean {
        const fieldType = field.types[0]?.replace("[]", "");
        return fieldType ? Validator.isValidTypeName(fieldType) : false;
    }

    private static isIdField(paramName: string): boolean {
        const idPatterns = [/id$/i, /_id$/i, /Id$/, /^id$/, /^_id$/];
        return idPatterns.some((pattern) => pattern.test(paramName));
    }

    private static isNonObjectIdType(paramName: string): boolean {
        return this.NON_OBJECT_ID_TYPES.some((pattern) => pattern.test(paramName));
    }

    private static makePathSafe(path: string): string {
        if (path.endsWith(".id")) {
            const basePath = path.slice(0, -3);
            return `${basePath}?.id`;
        }
        return path;
    }

    private static findFieldByName(
        fields: Field[],
        name: string,
    ): Field | undefined {
        return fields.find(
            (f) =>
                f.name.toLowerCase() === name ||
                CaseConverter.camelToSnake(f.name) === name,
        );
    }

    private static findSimilarField(
        fields: Field[],
        searchName: string,
    ): Field | undefined {
        const cleanSearch = searchName.replace(/_/g, "");

        return fields.find((field) => {
            const fieldNameLower = field.name.toLowerCase();
            const snakeName = CaseConverter.camelToSnake(field.name);

            return (
                fieldNameLower.includes(cleanSearch) ||
                snakeName.includes(cleanSearch) ||
                cleanSearch.includes(fieldNameLower.replace(/_/g, "")) ||
                cleanSearch.includes(snakeName.replace(/_/g, ""))
            );
        });
    }
}