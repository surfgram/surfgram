import { describe, expect, test } from "@jest/globals";
import { snakeToCamel, camelToSnake } from "../src/core/utils";

describe("Case Conversion Utilities", () => {
	describe("snakeToCamel", () => {
		test("should convert simple object from snake_case to camelCase", () => {
			const input = {
				user_id: 123,
				user_name: "john_doe",
				is_active: true,
			};

			const result = snakeToCamel(input);

			expect(result).toEqual({
				userId: 123,
				userName: "john_doe",
				isActive: true,
			});
		});

		test("should convert nested objects", () => {
			const input = {
				chat_id: 456,
				message: {
					message_id: 789,
					from_user: {
						user_id: 123,
						first_name: "John",
					},
				},
			};

			const result = snakeToCamel(input);

			expect(result).toEqual({
				chatId: 456,
				message: {
					messageId: 789,
					fromUser: {
						userId: 123,
						firstName: "John",
					},
				},
			});
		});

		test("should convert arrays of objects", () => {
			const input = {
				results: [
					{ user_id: 1, user_name: "user1" },
					{ user_id: 2, user_name: "user2" },
				],
				total_count: 2,
			};

			const result = snakeToCamel(input);

			expect(result).toEqual({
				results: [
					{ userId: 1, userName: "user1" },
					{ userId: 2, userName: "user2" },
				],
				totalCount: 2,
			});
		});

		test("should handle deeply nested structures", () => {
			const input = {
				update_id: 100,
				message: {
					message_id: 200,
					chat: {
						chat_id: 300,
						title: "Group Chat",
						pinned_message: {
							message_id: 400,
							text: "Pinned!",
						},
					},
				},
			};

			const result = snakeToCamel(input);

			expect(result).toEqual({
				updateId: 100,
				message: {
					messageId: 200,
					chat: {
						chatId: 300,
						title: "Group Chat",
						pinnedMessage: {
							messageId: 400,
							text: "Pinned!",
						},
					},
				},
			});
		});

		test("should return primitives unchanged", () => {
			expect(snakeToCamel(123)).toBe(123);
			expect(snakeToCamel("string")).toBe("string");
			expect(snakeToCamel(true)).toBe(true);
			expect(snakeToCamel(null)).toBe(null);
			expect(snakeToCamel(undefined)).toBe(undefined);
		});

		test("should handle empty objects and arrays", () => {
			expect(snakeToCamel({})).toEqual({});
			expect(snakeToCamel([])).toEqual([]);
		});

		test("should handle dates and special objects", () => {
			const date = new Date();
			const input = {
				created_at: date,
				data: date,
			};

			const result = snakeToCamel(input);

			expect(result.createdAt).toBe(date);
			expect(result.data).toBe(date);
		});
	});

	describe("camelToSnake", () => {
		test("should convert simple object from camelCase to snake_case", () => {
			const input = {
				userId: 123,
				userName: "john_doe",
				isActive: true,
			};

			const result = camelToSnake(input);

			expect(result).toEqual({
				user_id: 123,
				user_name: "john_doe",
				is_active: true,
			});
		});

		test("should convert nested objects", () => {
			const input = {
				chatId: 456,
				message: {
					messageId: 789,
					fromUser: {
						userId: 123,
						firstName: "John",
					},
				},
			};

			const result = camelToSnake(input);

			expect(result).toEqual({
				chat_id: 456,
				message: {
					message_id: 789,
					from_user: {
						user_id: 123,
						first_name: "John",
					},
				},
			});
		});

		test("should convert arrays of objects", () => {
			const input = {
				results: [
					{ userId: 1, userName: "user1" },
					{ userId: 2, userName: "user2" },
				],
				totalCount: 2,
			};

			const result = camelToSnake(input);

			expect(result).toEqual({
				results: [
					{ user_id: 1, user_name: "user1" },
					{ user_id: 2, user_name: "user2" },
				],
				total_count: 2,
			});
		});

		test("should handle deeply nested structures", () => {
			const input = {
				updateId: 100,
				message: {
					messageId: 200,
					chat: {
						chatId: 300,
						title: "Group Chat",
						pinnedMessage: {
							messageId: 400,
							text: "Pinned!",
						},
					},
				},
			};

			const result = camelToSnake(input);

			expect(result).toEqual({
				update_id: 100,
				message: {
					message_id: 200,
					chat: {
						chat_id: 300,
						title: "Group Chat",
						pinned_message: {
							message_id: 400,
							text: "Pinned!",
						},
					},
				},
			});
		});

		test("should skip undefined values", () => {
			const input = {
				userId: 123,
				userName: undefined,
				isActive: true,
				optionalField: undefined,
			};

			const result = camelToSnake(input);

			expect(result).toEqual({
				user_id: 123,
				is_active: true,
			});
			expect(result).not.toHaveProperty("user_name");
			expect(result).not.toHaveProperty("optional_field");
		});

		test("should return primitives unchanged", () => {
			expect(camelToSnake(123)).toBe(123);
			expect(camelToSnake("string")).toBe("string");
			expect(camelToSnake(true)).toBe(true);
			expect(camelToSnake(null)).toBe(null);
			expect(camelToSnake(undefined)).toBe(undefined);
		});

		test("should handle empty objects and arrays", () => {
			expect(camelToSnake({})).toEqual({});
			expect(camelToSnake([])).toEqual([]);
		});

		test("should handle dates and special objects", () => {
			const date = new Date();
			const input = {
				createdAt: date,
				data: date,
			};

			const result = camelToSnake(input);

			expect(result.created_at).toBe(date);
			expect(result.data).toBe(date);
		});

		test("should handle null values", () => {
			const input = {
				userId: 123,
				userName: null,
				isActive: true,
			};

			const result = camelToSnake(input);

			expect(result).toEqual({
				user_id: 123,
				user_name: null,
				is_active: true,
			});
		});
	});
});
