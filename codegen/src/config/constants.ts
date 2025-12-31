import nunjucks from "nunjucks";

export const API_URL = "https://core.telegram.org/bots/api";
export const TYPES_DIR_NAME = "types";
export const METHODS_DIR_NAME = "methods";
export const FLUENT_DIR_NAME = "fluent";
export const INTERFACES_DIR_NAME = "interfaces";
export const DOCS_DIR_NAME = "../../docs";
export const TESTS_DIR_NAME = "../../tests";

export const BASE_TYPE_MAP: Record<string, string> = {
	Integer: "number",
	Int: "number",
	String: "string",
	Boolean: "boolean",
	True: "boolean",
	False: "boolean",
	Float: "number",
	"Float number": "number",
};

export const env = nunjucks.configure("templates", {
	autoescape: false,
	trimBlocks: true,
	lstripBlocks: true,
});
