/**
 * Base types for Telegram Bot API JSON values with generic support
 * @module types/telegramObject
 * @description Provides foundational types for raw Telegram API data with generic type support
 */

/**
 * Base type for all JSON values with generic type parameter
 * @template T - The return/instance type for functions and constructors, defaults to `unknown`
 * @typedef {string | number | boolean | null | JsonValue<T>[] | { [key: string]: JsonValue<T> } | ((...args: unknown[]) => T) | (new (...args: unknown[]) => T)} JsonValue
 * @description Represents any value that can be stored in a JSON-like structure,
 * including primitives, arrays, objects, functions, and class constructors.
 * Functions and constructors are typed with generic return/instance type `T`.
 * @example
 * // String value
 * const str: JsonValue = "hello";
 *
 * // Array of numbers
 * const arr: JsonValue<number> = [1, 2, 3];
 *
 * // Function returning string
 * const fn: JsonValue<string> = () => "result";
 *
 * // Class constructor
 * const cls: JsonValue<MyClass> = MyClass;
 */
export type JsonValue<T = unknown> =
  | string
  | number
  | boolean
  | null
  | JsonValue<T>[]
  | { [key: string]: JsonValue<T> }
  | ((...args: unknown[]) => T)
  | (new (...args: unknown[]) => T);

/**
 * Base type for all Telegram Bot API objects
 * @template T - The return/instance type for functions and constructors in the object values, defaults to `unknown`
 * @typedef {Record<string, JsonValue<T>>} TelegramObject
 * @description Represents raw data in JSON-like format received from Telegram API.
 * Used only for typing the `raw` parameter in class constructors.
 * Not intended for use in business logic - use typed classes instead.
 * The generic parameter `T` allows specifying expected return types for functions
 * and instance types for constructors within the object.
 * @example
 * // Basic usage with unknown types
 * const rawData: TelegramObject = { id: 123, text: "Hello" };
 *
 * // Typed usage with functions
 * const withFunctions: TelegramObject<string> = {
 *   name: "getMessage",
 *   handler: () => "Message content"
 * };
 *
 * // In class constructor:
 * constructor(raw: TelegramObject, bot: Bot) {
 *   this.raw = raw;
 *   // ... convert to typed properties
 * }
 *
 * // Using with specific type
 * type MyReturnType = { id: number; name: string };
 * const typedObject: TelegramObject<MyReturnType> = {
 *   createUser: (id: number, name: string) => ({ id, name }),
 *   UserClass: class User { id: number; name: string; }
 * };
 */
export type TelegramObject<T = unknown> = Record<string, JsonValue<T>>;
