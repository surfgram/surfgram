import { resolve } from "path";
import { BaseGenerator } from "./baseGenerator";
import { FLUENT_DIR_NAME } from "../config/constants";
import { Validator } from "../utils/validator";
import { TypeNormalizer } from "../utils/typeNormalizer";
import { SortUtility } from "../utils/sortUtility";
import { MappingUtility } from "../utils/mappingUtility";

export class FluentGenerator extends BaseGenerator {
    generate() {
        console.log("Generating fluent api...");
        const fluentOut = resolve(this.outDir, FLUENT_DIR_NAME);
        this.writeFile(resolve(this.outDir, "types.ts"), this.renderBotTypes());
        this.writeFile(
            resolve(fluentOut, "methods.ts"),
            this.renderTemplate("fluent_methods.ts.njk", {
                methods: Object.values(this.methods).filter((m) =>
                    Validator.isValidMethodName(m.name),
                ),
            }),
        );
        this.writeFile(resolve(fluentOut, "events.ts"), this.renderFluentEvents());
        this.writeFile(
            resolve(fluentOut, "index.ts"),
            this.renderTemplate("fluent_index.ts.njk", {}),
        );
    }

    private renderBotTypes(): string {
        const methodData = Object.values(this.methods).map((method) => {
            const useParamsObject = Validator.shouldUseParamsObject(method);
            const sortedParams = SortUtility.sortParameters(method.parameters);
            const simpleParams = sortedParams.filter((p) => p.required).slice(0, 3);
            const simpleParamsSig = simpleParams
                .map((p) => `${p.name}: ${TypeNormalizer.resolveTsType(p.types)}`)
                .join(", ");
            const simpleParamsDoc = simpleParams.map((p) => p.name).join(", ");
            return {
                ...method,
                useParamsObject,
                interfaceName: `${method.name.charAt(0).toUpperCase()}${method.name.slice(1)}Params`,
                sortedParams: sortedParams.map((p) => ({
                    ...p,
                    tsType: TypeNormalizer.resolveTsType(p.types),
                })),
                paramsSignature: sortedParams
                    .map(
                        (p) =>
                            `${p.name}${p.required ? "" : "?"}: ${TypeNormalizer.resolveTsType(p.types)}`,
                    )
                    .join(", "),
                simpleParamsSig: simpleParams.length > 0 ? simpleParamsSig : null,
                simpleParamsDoc,
            };
        });

        const typeExtensions = this.buildTypeExtensions().map((extension) => ({
            ...extension,
            methods: extension.methods.map((method) => {
                const useParamsObject = Validator.shouldUseParamsObject(method);
                const sortedParams = SortUtility.sortParameters(method.parameters);
                const explicitParams = sortedParams.filter(
                    (p) => !method.autoMappedParams.includes(p.name),
                );
                const interfaceName = `${method.name.charAt(0).toUpperCase()}${method.name.slice(1)}Params`;
                
                let paramsSignature: string;
                if (useParamsObject) {
                    const excludedParamsString =
                        method.autoMappedParams.length > 0
                            ? method.autoMappedParams.map((p) => `'${p}'`).join(" | ")
                            : "never";
                    paramsSignature = `params: Omit<Interfaces.${interfaceName}, ${excludedParamsString}>`;
                } else {
                    paramsSignature = explicitParams
                        .map(
                            (p) =>
                                `${p.name}${p.required ? "" : "?"}: ${TypeNormalizer.resolveTsType(p.types)}`,
                        )
                        .join(", ");
                }

                return {
                    ...method,
                    useParamsObject,
                    interfaceName,
                    excludedParamsString:
                        method.autoMappedParams.length > 0
                            ? method.autoMappedParams.map((p) => `'${p}'`).join(" | ")
                            : "never",
                    explicitParams: explicitParams.map((p) => ({
                        ...p,
                        tsType: TypeNormalizer.resolveTsType(p.types),
                    })),
                    paramsSignature,
                };
            }),
        }));

        return this.renderTemplate("bot_types.d.ts.njk", {
            types: Object.values(this.types).filter((t) =>
                Validator.isValidTypeName(t.name),
            ),
            methods: methodData,
            typeExtensions,
        });
    }

    private renderFluentEvents(): string {
        const typeExtensions = this.buildTypeExtensions().map((extension) => ({
            ...extension,
            methods: extension.methods.map((method) => {
                const useParamsObject = Validator.shouldUseParamsObject(method);
                const sortedParams = SortUtility.sortParameters(method.parameters);
                const explicitParams = sortedParams.filter(
                    (p) => !method.autoMappedParams.includes(p.name),
                );
                const paramsSignature = explicitParams
                    .map(
                        (p) =>
                            `${p.name}${p.required ? "" : "?"}: ${TypeNormalizer.resolveTsType(p.types)}`,
                    )
                    .join(", ");
                const paramsNames = explicitParams.map((p) => p.name).join(", ");
                
                return {
                    ...method,
                    useParamsObject,
                    interfaceName: `${method.name.charAt(0).toUpperCase()}${method.name.slice(1)}Params`,
                    excludedParamsString:
                        method.autoMappedParams.length > 0
                            ? method.autoMappedParams.map((p) => `'${p}'`).join(" | ")
                            : "never",
                    explicitParams: explicitParams.map((p) => ({
                        ...p,
                        tsType: TypeNormalizer.resolveTsType(p.types),
                    })),
                    paramsSignature,
                    paramsNames,
                    returnTypeTs: TypeNormalizer.resolveTsType([method.returnType]),
                };
            }),
        }));

        return this.renderTemplate("fluent_events.ts.njk", {
            types: Object.values(this.types).filter((t) =>
                Validator.isValidTypeName(t.name),
            ),
            typeExtensions,
            resolveTsType: (types: string[]) => TypeNormalizer.resolveTsType(types),
        });
    }

    private buildTypeExtensions() {
        return Object.values(this.types)
            .filter((type) => Validator.isValidTypeName(type.name))
            .map((type) => {
                const compatibleMethods = Object.values(this.methods).filter((m) =>
                    Validator.isSemanticallyCompatible(m, type),
                );
                if (compatibleMethods.length === 0) return null;

                return {
                    name: type.name,
                    fileName: type.fileName.replace(".ts", ""),
                    methods: compatibleMethods.map((method) => {
                        const mappings = MappingUtility.findContextualMappings(
                            type,
                            method,
                        );
                        const autoMappings = mappings.filter(
                            (m) => m.similarityScore > 0.5,
                        );
                        const autoMappedParams = autoMappings.map((m) => m.parameterName);

                        return {
                            ...method,
                            autoMappedParams,
                            autoMappings,
                        };
                    }),
                };
            })
            .filter((t): t is NonNullable<typeof t> => t !== null);
    }
}