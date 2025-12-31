import { resolve } from "path";
import { BaseGenerator } from "./baseGenerator";
import { TESTS_DIR_NAME } from "../config/constants";
import { Validator } from "../utils/validator";
import { CaseConverter } from "../utils/caseConverter";
import { SortUtility } from "../utils/sortUtility";
import { DocUtility } from "../utils/docUtility";
import { FileSystemUtility } from "../utils/fileSystemUtility";

export class TestGenerator extends BaseGenerator {
	generate() {
		console.log("Generating tests...");
		const testsOut = resolve(this.outDir, TESTS_DIR_NAME);
		const testsTypesOut = resolve(testsOut, "types");
		const testsMethodsOut = resolve(testsOut, "methods");
		FileSystemUtility.ensureDirectories([testsTypesOut, testsMethodsOut]);
		FileSystemUtility.cleanDirectory(testsTypesOut);
		FileSystemUtility.cleanDirectory(testsMethodsOut);
		const typeTests = Object.values(this.types)
			.filter((t) => Validator.isValidTypeName(t.name))
			.map((type) => {
				return {
					file: `${type.fileName.replace(".ts", ".test.ts")}`,
					content: this.renderTemplate("test_type.ts.njk", {
						type,
						fileName: type.fileName.replace(".ts", ""),
						fields: (type.fields || []).map((f) => ({
							name: f.name,
							snakeName: CaseConverter.camelToSnake(f.name),
							mockValue: DocUtility.getExampleValue(f.types[0]),
						})),
					}),
				};
			});
		typeTests.forEach((t) =>
			this.writeFile(resolve(testsTypesOut, t.file), t.content),
		);
		const methodTests = Object.values(this.methods)
			.filter((m) => Validator.isValidMethodName(m.name))
			.map((method) => {
				const sortedParams = SortUtility.sortParameters(method.parameters);
				return {
					file: `${method.name}.test.ts`,
					content: this.renderTemplate("test_method.ts.njk", {
						method,
						useParamsObject: Validator.shouldUseParamsObject(method),
						params: sortedParams.map((p) => ({
							name: p.name,
							snakeName: CaseConverter.camelToSnake(p.name),
							mockValue: DocUtility.getExampleValue(p.types[0]),
						})),
						argsString: sortedParams
							.map((p) => DocUtility.getExampleValue(p.types[0]))
							.join(", "),
					}),
				};
			});
		methodTests.forEach((t) =>
			this.writeFile(resolve(testsMethodsOut, t.file), t.content),
		);
	}
}
