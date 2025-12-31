import { resolve } from "path";
import { BaseGenerator } from "./baseGenerator";
import { INTERFACES_DIR_NAME, BASE_TYPE_MAP } from "../config/constants";
import { Validator } from "../utils/validator";
import { CaseConverter } from "../utils/caseConverter";
import { TypeNormalizer } from "../utils/typeNormalizer";
import { SortUtility } from "../utils/sortUtility";

export class InterfaceGenerator extends BaseGenerator {
	generate() {
		console.log("Generating interfaces...");
		const interfacesOut = resolve(this.outDir, INTERFACES_DIR_NAME);
		const validMethods = Object.values(this.methods).filter((m) =>
			Validator.isValidMethodName(m.name),
		);
		for (const method of validMethods) {
			if (Validator.shouldUseParamsObject(method)) {
				const imports = new Set<string>();
				for (const param of method.parameters) {
					for (const tName of param.types) {
						const clean = tName.replace("[]", "");
						if (
							clean !== "any" &&
							!BASE_TYPE_MAP[clean] &&
							!["string", "number", "boolean"].includes(clean.toLowerCase()) &&
							this.allTypeNames.includes(clean)
						) {
							imports.add(clean);
						}
					}
				}
				const interfaceName = `${method.name.charAt(0).toUpperCase()}${method.name.slice(1)}Params`;
				const data = {
					method,
					interfaceName,
					imports: Array.from(imports).map((name) => ({
						name,
						file: CaseConverter.toCamelCaseFileName(name).replace(".ts", ""),
					})),
					params: SortUtility.sortParameters(method.parameters).map((p) => ({
						...p,
						tsType: TypeNormalizer.resolveTsType(p.types),
						requiredMark: p.required ? "" : "?",
						requiredText: p.required ? "Yes" : "No",
					})),
				};
				const content = this.renderTemplate("interface.ts.njk", data);
				const fileName = CaseConverter.toCamelCaseFileName(interfaceName);
				this.writeFile(resolve(interfacesOut, fileName), content);
			}
		}
		this.writeFile(
			resolve(interfacesOut, "index.ts"),
			this.renderTemplate("interfaces_index.ts.njk", {
				methods: validMethods
					.filter((m) => Validator.shouldUseParamsObject(m))
					.map((m) => ({
						interfaceFileName: CaseConverter.toCamelCaseFileName(
							`${m.name.charAt(0).toUpperCase()}${m.name.slice(1)}Params`,
						).replace(".ts", ""),
					})),
			}),
		);
	}
}
