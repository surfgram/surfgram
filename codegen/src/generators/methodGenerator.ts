import { resolve } from "path";
import { BaseGenerator } from "./baseGenerator";
import { METHODS_DIR_NAME, BASE_TYPE_MAP } from "../config/constants";
import { Validator } from "../utils/validator";
import { CaseConverter } from "../utils/caseConverter";
import { TypeNormalizer } from "../utils/typeNormalizer";
import { SortUtility } from "../utils/sortUtility";

export class MethodGenerator extends BaseGenerator {
	generate() {
		console.log("Generating methods...");
		const methodsOut = resolve(this.outDir, METHODS_DIR_NAME);
		const validMethods = Object.values(this.methods).filter((m) =>
			Validator.isValidMethodName(m.name),
		);
		for (const method of validMethods) {
			const useParamsObject = Validator.shouldUseParamsObject(method);
			const interfaceName = `${method.name.charAt(0).toUpperCase()}${method.name.slice(1)}Params`;
			const importMap = new Map<
				string,
				{ name: string; file: string; isInterface: boolean }
			>();
			if (useParamsObject) {
				importMap.set(interfaceName, {
					name: interfaceName,
					file: CaseConverter.toCamelCaseFileName(interfaceName).replace(
						".ts",
						"",
					),
					isInterface: true,
				});
			}
			for (const param of method.parameters) {
				for (const tName of param.types) {
					const clean = tName.replace("[]", "");
					if (
						clean === "any" ||
						BASE_TYPE_MAP[clean] ||
						["string", "number", "boolean", "true", "false"].includes(
							clean.toLowerCase(),
						)
					)
						continue;
					if (this.allTypeNames.includes(clean) && !importMap.has(clean)) {
						importMap.set(clean, {
							name: clean,
							file: CaseConverter.toCamelCaseFileName(clean).replace(".ts", ""),
							isInterface: false,
						});
					}
				}
			}
			const retTypeClean = method.returnType.replace("[]", "");
			if (
				retTypeClean &&
				!BASE_TYPE_MAP[retTypeClean] &&
				!["string", "number", "boolean", "any"].includes(
					retTypeClean.toLowerCase(),
				) &&
				this.allTypeNames.includes(retTypeClean) &&
				!importMap.has(retTypeClean)
			) {
				importMap.set(retTypeClean, {
					name: retTypeClean,
					file: CaseConverter.toCamelCaseFileName(retTypeClean).replace(
						".ts",
						"",
					),
					isInterface: false,
				});
			}
			const imports = Array.from(importMap.values());
			const sortedParams = SortUtility.sortParameters(method.parameters).map(
				(p) => ({
					...p,
					tsType: TypeNormalizer.resolveTsType(p.types),
					requiredMark: p.required ? "" : "?",
				}),
			);
			const paramsSignature = sortedParams
				.map((p) => `${p.name}${p.required ? "" : "?"}: ${p.tsType}`)
				.join(", ");
			const data = {
				method,
				interfaceName,
				imports,
				useParamsObject,
				sortedParams,
				paramsSignature,
			};
			const content = this.renderTemplate("method.ts.njk", data);
			this.writeFile(resolve(methodsOut, `${method.name}.ts`), content);
		}
		this.writeFile(
			resolve(methodsOut, "index.ts"),
			this.renderTemplate("methods_index.ts.njk", { methods: validMethods }),
		);
	}
}
