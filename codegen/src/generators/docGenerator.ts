import { resolve } from "path";
import { BaseGenerator } from "./baseGenerator";
import { DOCS_DIR_NAME } from "../config/constants";
import { Validator } from "../utils/validator";
import { TypeNormalizer } from "../utils/typeNormalizer";
import { MappingUtility } from "../utils/mappingUtility";
import { DocUtility } from "../utils/docUtility";
import { FileSystemUtility } from "../utils/fileSystemUtility";
import { Type, ApiMethod } from "../config/types";

export class DocGenerator extends BaseGenerator {
	generate() {
		console.log("Generating documentation...");
		const docsOut = resolve(this.outDir, DOCS_DIR_NAME);
		const typesDir = resolve(docsOut, "types");
		const methodsDir = resolve(docsOut, "methods");
		const fluentDir = resolve(docsOut, "fluent");

		FileSystemUtility.ensureDirectories([typesDir, methodsDir, fluentDir]);
		FileSystemUtility.cleanDirectory(typesDir);
		FileSystemUtility.cleanDirectory(methodsDir);
		FileSystemUtility.cleanDirectory(fluentDir);

		for (const type of Object.values(this.types)) {
			if (Validator.isValidTypeName(type.name)) {
				this.writeFile(
					resolve(typesDir, `${type.name}.md`),
					this.renderTypeDoc(type),
				);
			}
		}

		const allMethods = Object.values(this.methods)
			.filter((m) => Validator.isValidMethodName(m.name))
			.sort((a, b) => a.name.localeCompare(b.name));

		for (const method of allMethods) {
			this.writeFile(
				resolve(methodsDir, `${method.name}.md`),
				this.renderMethodDoc(method),
			);
		}

		this.writeFile(
			resolve(fluentDir, "quick-start.md"),
			this.renderFluentQuickStart(),
		);
		this.writeFile(
			resolve(fluentDir, "event-handling.md"),
			this.renderTemplate("doc_fluent_event_handling.md.njk", {}),
		);
		this.writeFile(
			resolve(fluentDir, "best-practices.md"),
			this.renderTemplate("doc_fluent_best_practices.md.njk", {}),
		);

		const typesWithFluent = Object.values(this.types).filter(
			(t) =>
				Validator.isValidTypeName(t.name) &&
				Object.values(this.methods).some((m) =>
					Validator.isSemanticallyCompatible(m, t),
				),
		);

		const typesWithoutFluent = Object.values(this.types).filter(
			(t) =>
				Validator.isValidTypeName(t.name) &&
				!Object.values(this.methods).some((m) =>
					Validator.isSemanticallyCompatible(m, t),
				),
		);

		this.writeFile(
			resolve(docsOut, "README.md"),
			this.renderTemplate("doc_readme.md.njk", {
				typesWithFluent: typesWithFluent.map((t) => ({
					name: t.name,
					methodCount: Object.values(this.methods).filter((m) =>
						Validator.isSemanticallyCompatible(m, t),
					).length,
				})),
				typesWithoutFluent,
				allMethods,
				messageType: typesWithFluent.find((t) => t.name === "Message"),
			}),
		);
	}

	private renderTypeDoc(type: Type): string {
		const compatibleMethods = Object.values(this.methods)
			.filter((m) => Validator.isSemanticallyCompatible(m, type))
			.map((method) => this.prepareMethodForType(type, method));

		return this.renderTemplate("doc_type.md.njk", {
			type: {
				...type,
				fields: type.fields?.map((f) => ({
					...f,
					tsTypeFormatted: TypeNormalizer.resolveTsType(f.types)
						.split("|")
						.map((t) => `\`${t.trim()}\``)
						.join(" \\| "),
					requiredText: f.required ? "Yes" : "No",
				})),
			},
			compatibleMethods,
			officialLink: `https://core.telegram.org/bots/api#${type.name.toLowerCase()}`,
		});
	}

	private renderMethodDoc(method: ApiMethod): string {
		const fluentTypes = Object.values(this.types)
			.filter((t) => Validator.isSemanticallyCompatible(method, t))
			.map((type) => {
				const mappings = MappingUtility.findContextualMappings(type, method);
				const autoMappings = mappings.filter((m) => m.isOptional);
				const allCompatibleMethods = Object.values(this.methods)
					.filter((m) => Validator.isSemanticallyCompatible(m, type))
					.map((m) => m.name);

				const useParamsObject = Validator.shouldUseParamsObject(method);

				let exampleCall = "";
				if (useParamsObject) {
					if (method.parameters.length === 0) {
						exampleCall = `await ${type.name.toLowerCase()}.${method.name}();`;
					} else {
						exampleCall = `await ${type.name.toLowerCase()}.${method.name}({ });`;
					}
				} else {
					const requiredParams = method.parameters.filter((p) => p.required);
					if (requiredParams.length === 0) {
						exampleCall = `await ${type.name.toLowerCase()}.${method.name}();`;
					} else {
						exampleCall = `await ${type.name.toLowerCase()}.${method.name}(/* params */);`;
					}
				}

				return {
					name: type.name,
					allMethods: allCompatibleMethods.map((m) => `\`${m}\``).join(", "),
					methodCount: allCompatibleMethods.length,
					autoParams: autoMappings.map((m) => m.parameterName).join(", "),
					exampleCall,
					eventCall: `await ${type.name.toLowerCase()}.${method.name}(${useParamsObject && method.parameters.length > 0 ? "{}" : ""});`,
				};
			});

		let directCall = "";
		const useParamsObject = Validator.shouldUseParamsObject(method);

		if (useParamsObject) {
			if (method.parameters.length === 0) {
				directCall = `await bot.${method.name}();`;
			} else {
				directCall = `await bot.${method.name}({\n`;
				const requiredParams = method.parameters.filter((p) => p.required);
				if (requiredParams.length > 0) {
					directCall += requiredParams
						.slice(0, 3)
						.map(
							(p) => `  ${p.name}: ${DocUtility.getExampleValue(p.types[0])},`,
						)
						.join("\n");
				}
				directCall += "\n});";
			}
		} else {
			const requiredParams = method.parameters.filter((p) => p.required);
			if (requiredParams.length === 0) {
				directCall = `await bot.${method.name}();`;
			} else {
				directCall = `await bot.${method.name}(${requiredParams
					.slice(0, 3)
					.map((p) => DocUtility.getExampleValue(p.types[0]))
					.join(", ")});`;
			}
		}

		return this.renderTemplate("doc_method.md.njk", {
			method: {
				...method,
				parameters: method.parameters.map((p) => ({
					...p,
					typeStr: TypeNormalizer.resolveTsType(p.types)
						.split("|")
						.map((t) => `\`${t.trim()}\``)
						.join(" \\| "),
					requiredText: p.required ? "Yes" : "No",
				})),
			},
			fluentTypes,
			directCall,
			officialLink: `https://core.telegram.org/bots/api#${method.name.toLowerCase()}`,
		});
	}

	private prepareMethodForType(type: Type, method: ApiMethod) {
		const mappings = MappingUtility.findContextualMappings(type, method);
		const autoMappings = mappings
			.filter((m) => m.isOptional)
			.map((m) => ({
				...m,
				description:
					method.parameters.find((p) => p.name === m.parameterName)
						?.description || "",
			}));

		const useParamsObject = Validator.shouldUseParamsObject(method);
		const autoParamNames = autoMappings.map((m) => m.parameterName);
		const nonAutoParams = method.parameters
			.filter((p) => !autoParamNames.includes(p.name))
			.map((p) => ({
				...p,
				typeStr: TypeNormalizer.resolveTsType(p.types)
					.split("|")
					.map((t) => `\`${t.trim()}\``)
					.join(" \\| "),
				requiredText: p.required ? "Yes" : "No",
			}));

		let signature = "";
		if (useParamsObject) {
			const interfaceName = `${method.name.charAt(0).toUpperCase()}${method.name.slice(1)}Params`;
			if (autoMappings.length > 0) {
				const excluded = autoParamNames.map((p) => `'${p}'`).join(" | ");
				signature = `${method.name}(params: Omit<${interfaceName}, ${excluded}>): Promise<${method.returnType}>`;
			} else {
				signature = `${method.name}(params: ${interfaceName}): Promise<${method.returnType}>`;
			}
		} else {
			const paramsList = nonAutoParams
				.map(
					(p) =>
						`${p.name}${p.required ? "" : "?"}: ${TypeNormalizer.resolveTsType(p.types)}`,
				)
				.join(", ");
			signature = `${method.name}(${paramsList}): Promise<${method.returnType}>`;
		}

		let exampleCall = "";
		if (useParamsObject) {
			if (nonAutoParams.length === 0) {
				exampleCall = `await ${type.name.toLowerCase()}.${method.name}();`;
			} else {
				exampleCall = `await ${type.name.toLowerCase()}.${method.name}({`;
				if (nonAutoParams.length > 0) {
					exampleCall +=
						"\n" +
						nonAutoParams
							.slice(0, 2)
							.map(
								(p) =>
									`  ${p.name}: ${DocUtility.getExampleValue(p.types[0])},`,
							)
							.join("\n") +
						"\n});";
				} else {
					exampleCall += "});";
				}
			}
		} else {
			if (nonAutoParams.length === 0) {
				exampleCall = `await ${type.name.toLowerCase()}.${method.name}();`;
			} else {
				exampleCall = `await ${type.name.toLowerCase()}.${method.name}(`;
				if (nonAutoParams.length > 0) {
					exampleCall +=
						"\n" +
						nonAutoParams
							.slice(0, 2)
							.map((p) => `  ${DocUtility.getExampleValue(p.types[0])},`)
							.join("\n") +
						"\n);";
				} else {
					exampleCall += ");";
				}
			}
		}

		let eventExampleCall = "";
		if (useParamsObject) {
			if (nonAutoParams.length === 0) {
				eventExampleCall = `await ${type.name.toLowerCase()}.${method.name}();`;
			} else if (
				nonAutoParams.some(
					(p) => p.types.includes("string") || p.name.includes("text"),
				)
			) {
				const p = nonAutoParams.find(
					(p) => p.types.includes("string") || p.name.includes("text"),
				);
				eventExampleCall = `await ${type.name.toLowerCase()}.${method.name}({ ${p?.name}: "Response" });`;
			} else {
				eventExampleCall = `await ${type.name.toLowerCase()}.${method.name}({});`;
			}
		} else {
			if (nonAutoParams.length === 0) {
				eventExampleCall = `await ${type.name.toLowerCase()}.${method.name}();`;
			} else {
				eventExampleCall = `await ${type.name.toLowerCase()}.${method.name}();`;
			}
		}

		return {
			...method,
			autoMappings,
			nonAutoParams,
			signature,
			exampleCall,
			eventExampleCall,
		};
	}

	private renderFluentQuickStart() {
		const topTypes = Object.values(this.types)
			.filter((t) => Validator.isValidTypeName(t.name))
			.map((type) => {
				const compat = Object.values(this.methods).filter((m) =>
					Validator.isSemanticallyCompatible(m, type),
				);
				return {
					type,
					methodCount: compat.length,
					allMethods: compat.map((m) => `\`${m}\``).join(", "),
					exampleMethod: compat.length > 0 ? compat[0].name : null,
				};
			})
			.filter((i) => i.methodCount > 0)
			.sort((a, b) => b.methodCount - a.methodCount)
			.slice(0, 10);

		return this.renderTemplate("doc_fluent_quick_start.md.njk", { topTypes });
	}
}
