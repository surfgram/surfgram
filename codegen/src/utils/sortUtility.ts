import { Field } from "../config/types";

/**
 * Utility class for sorting
 */
export class SortUtility {
	static sortParameters(parameters: Field[]): Field[] {
		return [...parameters].sort((a, b) => {
			if (a.required && !b.required) return -1;
			if (!a.required && b.required) return 1;
			return 0;
		});
	}
}
