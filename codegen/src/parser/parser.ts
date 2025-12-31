import { API_URL } from "../config/constants";
import { Type, ApiMethod, Field } from "../config/types";
import { CaseConverter } from "../utils/caseConverter";
import { TypeNormalizer } from "../utils/typeNormalizer";
import { Validator } from "../utils/validator";
import { SortUtility } from "../utils/sortUtility";

/**
 * Parser class responsible for fetching and parsing API data
 */
export class Parser {
	private html: string = "";

	async fetchAPI(): Promise<string> {
		console.log("Fetching...");
		const res = await fetch(API_URL);
		this.html = await res.text();
		return this.html;
	}

	parseTypesAndMethods(): {
		types: Record<string, Type>;
		methods: Record<string, ApiMethod>;
	} {
		const types: Record<string, Type> = {};
		const methods: Record<string, ApiMethod> = {};
		const h4Regex =
			/<h4[^>]*>.*?<a\s+[^>]*name="([^"]+)"[^>]*>.*?<\/a>([^<]+)<\/h4>/g;
		const matches: Array<{ id: string; title: string }> = [];
		let match;
		while ((match = h4Regex.exec(this.html))) {
			const id = match[1];
			if (
				id.includes("changes") ||
				id.includes("release") ||
				id.includes("changelog")
			)
				continue;
			matches.push({ id, title: match[2].trim() });
		}
		const typeTables = this.html.match(
			/<h3[^>]*>Available types<\/h3>[\s\S]*?<table class="table">([\s\S]*?)<\/table>/gi,
		);
		const realTypeNames = new Set<string>();
		if (typeTables) {
			for (const table of typeTables) {
				const rows = table.match(/<tr>([\s\S]*?)<\/tr>/g) || [];
				for (const row of rows) {
					const tdMatches = row.match(/<td[^>]*>([\s\S]*?)<\/td>/g);
					if (tdMatches && tdMatches.length >= 1) {
						const typeName = tdMatches[0].replace(/<[^>]*>/g, "").trim();
						if (typeName && typeName !== "Field" && /^[A-Z]/.test(typeName)) {
							const cleanName = typeName.replace(/\(.*?\)/g, "").trim();
							if (Validator.isValidTypeName(cleanName))
								realTypeNames.add(cleanName);
						}
					}
				}
			}
		}
		for (const { id, title } of matches) {
			const cleanTitle = title.replace(/\(.*?\)/g, "").trim();
			if (
				(realTypeNames.has(cleanTitle) ||
					Validator.isValidTypeName(cleanTitle)) &&
				cleanTitle.length < 50 &&
				!cleanTitle.includes(" ")
			) {
				if (!types[id]) {
					types[id] = {
						originalName: id,
						name: cleanTitle,
						fileName: CaseConverter.normalizeFileName(cleanTitle),
						description: cleanTitle,
						fields: [],
					};
				}
			}
		}
		for (const { id, title } of matches) {
			if (/^[a-z]/.test(title) && Validator.isValidMethodName(title)) {
				const methodName = title;
				const methodSection = this.html.split(`name="${id}"`)[1];
				if (!methodSection) continue;
				let methodDescription = title;
				const descSec = methodSection.split("</h4>")[1];
				if (descSec) {
					const p = descSec.split("</p>")[0];
					if (p)
						methodDescription = p
							.replace(/<[^>]*>/g, "")
							.replace(/\s+/g, " ")
							.trim();
				}
				const parameters: Field[] = [];
				const tableMatch = methodSection.match(
					/<table class="table">([\s\S]*?)<\/table>/,
				);
				if (tableMatch) {
					const rows = tableMatch[1].match(/<tr>([\s\S]*?)<\/tr>/g) || [];
					for (const row of rows) {
						const parsed =
							this.parseTableRow4Columns(row) ||
							this.parseTableRow3Columns(row);
						if (parsed) {
							parameters.push({
								name: CaseConverter.normalizeFieldName(parsed.name),
								types: [],
								required: parsed.required,
								description: parsed.description,
								originalType: parsed.type,
							});
						}
					}
				}
				let returnType = "boolean";
				const returnsMatch = methodSection.match(/Returns\s+([^\.<]+)/i);
				if (returnsMatch) {
					const returnText = returnsMatch[1].trim().replace(/<[^>]*>/g, "");
					const allTypeNames = Object.values(types).map((t) => t.name);
					const normalized = TypeNormalizer.normalizeTelegramType(
						returnText,
						allTypeNames,
					);
					if (normalized.types.length > 0)
						returnType = normalized.types.join(" | ");
				}
				const sortedParameters = SortUtility.sortParameters(parameters);
				methods[methodName] = {
					name: methodName,
					description: methodDescription,
					parameters: sortedParameters,
					returnType,
					directParameters: [],
				};
			}
		}
		const allTypeNames = Object.values(types).map((t) => t.name);
		for (const [originalId, type] of Object.entries(types)) {
			const section = this.html.split(`name="${originalId}"`)[1];
			if (!section) continue;
			let typeDesc = type.description;
			const descSec = section.split("</h4>")[1];
			if (descSec) {
				const p = descSec.split("</p>")[0];
				if (p)
					typeDesc = p
						.replace(/<[^>]*>/g, "")
						.replace(/\s+/g, " ")
						.trim();
			}
			type.description = typeDesc;
			const tableMatch = section.match(
				/<table class="table">([\s\S]*?)<\/table>/,
			);
			if (tableMatch) {
				const rows = tableMatch[1].match(/<tr>([\s\S]*?)<\/tr>/g) || [];
				for (const row of rows) {
					const parsed =
						this.parseTableRow4Columns(row) || this.parseTableRow3Columns(row);
					if (parsed) {
						const normalized = TypeNormalizer.normalizeTelegramType(
							parsed.type,
							allTypeNames,
						);
						type.fields!.push({
							name: CaseConverter.normalizeFieldName(parsed.name),
							types: normalized.types,
							required: parsed.required,
							description: parsed.description,
							originalType: normalized.original,
						});
					}
				}
			}
		}
		const allUsedTypes = new Set<string>();
		for (const method of Object.values(methods)) {
			for (const param of method.parameters) {
				const normalized = TypeNormalizer.normalizeTelegramType(
					param.originalType,
					allTypeNames,
				);
				param.types = normalized.types;
				normalized.types.forEach((t) => {
					const c = t.replace("[]", "");
					if (
						c &&
						!["string", "number", "boolean", "any"].includes(c.toLowerCase())
					)
						allUsedTypes.add(c);
				});
			}
			const rt = method.returnType.replace("[]", "");
			if (
				rt &&
				!["string", "number", "boolean", "any"].includes(rt.toLowerCase())
			)
				allUsedTypes.add(rt);
		}
		for (const usedType of allUsedTypes) {
			if (usedType === "any" || !Validator.isValidTypeName(usedType)) continue;
			if (
				!Object.values(types).some(
					(t) => t.name.toLowerCase() === usedType.toLowerCase(),
				)
			) {
				const k = usedType.toLowerCase();
				types[k] = {
					originalName: k,
					name: usedType,
					fileName: CaseConverter.normalizeFileName(usedType),
					description: usedType,
					fields: [],
				};
				allTypeNames.push(usedType);
			}
		}
		return { types, methods };
	}

	private parseTableRow4Columns(rowHtml: string): {
		name: string;
		type: string;
		required: boolean;
		description: string;
	} | null {
		const tdMatches = rowHtml.match(/<td[^>]*>([\s\S]*?)<\/td>/g);
		if (!tdMatches || tdMatches.length < 4) return null;
		const name = tdMatches[0].replace(/<[^>]*>/g, "").trim();
		const type = tdMatches[1]
			.replace(/<[^>]*>/g, "")
			.trim()
			.replace(/\s+/g, " ");
		const requiredText = tdMatches[2]
			.replace(/<[^>]*>/g, "")
			.trim()
			.toLowerCase();
		const required = requiredText === "yes";
		let description = tdMatches[3]
			.replace(/<[^>]*>/g, "")
			.replace(/&lt;/g, "<")
			.replace(/&gt;/g, ">")
			.replace(/&quot;/g, '"')
			.replace(/&#39;/g, "'")
			.replace(/&#x27;/g, "'")
			.replace(/&#x2F;/g, "/")
			.replace(/&amp;/g, "&")
			.replace(/&#x60;/g, "`")
			.replace(/&#96;/g, "`")
			.replace(/\s+/g, " ")
			.trim();
		if (
			!name ||
			name === "Field" ||
			name === "Parameter" ||
			name === "Parameters"
		)
			return null;
		return { name, type, required, description };
	}

	private parseTableRow3Columns(rowHtml: string): {
		name: string;
		type: string;
		required: boolean;
		description: string;
	} | null {
		const tdMatches = rowHtml.match(/<td[^>]*>([\s\S]*?)<\/td>/g);
		if (!tdMatches || tdMatches.length < 3) return null;
		const name = tdMatches[0].replace(/<[^>]*>/g, "").trim();
		const type = tdMatches[1]
			.replace(/<[^>]*>/g, "")
			.trim()
			.replace(/\s+/g, " ");
		let description = tdMatches[2]
			.replace(/<[^>]*>/g, "")
			.replace(/&lt;/g, "<")
			.replace(/&gt;/g, ">")
			.replace(/&quot;/g, '"')
			.replace(/&#39;/g, "'")
			.replace(/&#x2F;/g, "/")
			.replace(/&amp;/g, "&");
		const required =
			!type.toLowerCase().includes("optional") &&
			!description.toLowerCase().includes("optional");
		if (!name || name === "Field" || name === "Parameter") return null;
		return { name, type, required, description };
	}
}
