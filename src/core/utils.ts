/**
 * Utility module providing conversion functions between snake_case and camelCase
 * for seamless integration with Telegram Bot API which uses snake_case.
 * @module utils
 */

type SnakeToCamelCase<S extends string> = S extends `${infer T}_${infer U}`
	? `${T}${Capitalize<SnakeToCamelCase<U>>}`
	: S;

type CamelToSnakeCase<S extends string> = S extends `${infer T}${infer U}`
	? U extends Uncapitalize<U>
		? `${Lowercase<T>}${CamelToSnakeCase<U>}`
		: `${Lowercase<T>}_${CamelToSnakeCase<Uncapitalize<U>>}`
	: S;

type SnakeToCamel<T> = T extends Array<infer U>
	? Array<SnakeToCamel<U>>
	: T extends object
		? { [K in keyof T as SnakeToCamelCase<K & string>]: SnakeToCamel<T[K]> }
		: T;

type CamelToSnake<T> = T extends Array<infer U>
	? Array<CamelToSnake<U>>
	: T extends object
		? { [K in keyof T as CamelToSnakeCase<K & string>]: CamelToSnake<T[K]> }
		: T;

/**
 * Recursively converts an object's keys from snake_case to camelCase
 * @param {any} obj - The object to convert (can be any type: object, array, primitive)
 * @returns {any} The converted object with camelCase keys
 */
export function snakeToCamel<T>(obj: T): SnakeToCamel<T> {
	if (Array.isArray(obj)) {
		return obj.map((item) => snakeToCamel(item)) as SnakeToCamel<T>;
	}

	if (obj !== null && typeof obj === "object" && obj.constructor === Object) {
		const result: any = {};
		for (const key in obj) {
			const value = obj[key];
			const camelKey = key.replace(/_([a-z])/g, (_, char) =>
				char.toUpperCase(),
			);
			result[camelKey] = snakeToCamel(value);
		}
		return result;
	}

	return obj as SnakeToCamel<T>;
}

/**
 * Recursively converts an object's keys from camelCase to snake_case
 * @param {any} obj - The object to convert (can be any type: object, array, primitive)
 * @returns {any} The converted object with snake_case keys
 * @note Undefined values are skipped to avoid sending unnecessary parameters to API
 */
export function camelToSnake<T>(obj: T): CamelToSnake<T> {
	if (Array.isArray(obj)) {
		return obj.map((item) => camelToSnake(item)) as CamelToSnake<T>;
	}

	if (obj !== null && typeof obj === "object" && obj.constructor === Object) {
		const result: any = {};
		for (const key in obj) {
			const value = obj[key];
			if (value === undefined) continue;

			const snakeKey = key
				.replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`)
				.replace(/^_/, "");

			result[snakeKey] = camelToSnake(value);
		}
		return result;
	}

	return obj as CamelToSnake<T>;
}

/**
 * Checks if a key exists in an object (case-insensitive, recursive)
 * @param {any} obj - The object to search in
 * @param {string} field - The field name to look for
 * @returns {boolean} True if key exists, false otherwise
 */
export function keyExists(obj: any, field: string): boolean {
	const normalizedField = field.toLowerCase();

	if (typeof obj === "object" && obj !== null) {
		if (Array.isArray(obj)) {
			for (const item of obj) {
				if (keyExists(item, normalizedField)) {
					return true;
				}
			}
		} else {
			for (const key of Object.keys(obj)) {
				if (key.toLowerCase() === normalizedField) {
					return true;
				}
				if (typeof obj[key] === "object" && obj[key] !== null) {
					if (keyExists(obj[key], normalizedField)) {
						return true;
					}
				}
			}
		}
	}
	return false;
}

/**
 * Checks if a value exists in an object (case-insensitive, recursive)
 * @param {any} obj - The object to search in
 * @param {string} field - The value to look for
 * @returns {boolean} True if value exists, false otherwise
 */
export function valueExists(obj: any, field: string): boolean {
	const normalizedField = String(field).toLowerCase();

	if (typeof obj === "object" && obj !== null) {
		if (Array.isArray(obj)) {
			for (const item of obj) {
				if (valueExists(item, normalizedField)) {
					return true;
				}
			}
		} else {
			for (const value of Object.values(obj)) {
				if (
					value === field ||
					String(value).toLowerCase() === normalizedField
				) {
					return true;
				}
				if (typeof value === "object" && value !== null) {
					if (valueExists(value, normalizedField)) {
						return true;
					}
				}
			}
		}
	}
	return false;
}
