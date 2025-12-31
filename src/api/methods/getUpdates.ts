/**
 * getUpdates method implementation for Surfgram Telegram Bot SDK
 * @module methods/getUpdates
 * @description Use this method to receive incoming updates using long polling \(wiki\). Returns an Array of Update objects.
 * @see {@link https://core.telegram.org/bots/api#getUpdates Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { GetUpdatesParams } from "../interfaces/getUpdatesParams";

/**
 * Use this method to receive incoming updates using long polling \(wiki\). Returns an Array of Update objects.
 * @memberof methods
 * @async
 * @function getUpdates
 * @this {Bot} Bot instance
 * @param { GetUpdatesParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.getUpdates({
 * // ... params
 * });
 */
export async function getUpdates(
	this: Bot,
	params: GetUpdatesParams,
): Promise<any> {
	const snakeParams = camelToSnake(params);
	const response = await this.callApi<any>("getUpdates", snakeParams);
	return response;
}
