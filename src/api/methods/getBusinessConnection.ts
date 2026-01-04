/**
 * getBusinessConnection method implementation for Surfgram Telegram Bot SDK
 * @module methods/getBusinessConnection
 * @description Use this method to get information about the connection of the bot with a business account. Returns a BusinessConnection object on success.
 * @see {@link https://core.telegram.org/bots/api#getBusinessConnection Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Use this method to get information about the connection of the bot with a business account. Returns a BusinessConnection object on success.
 * @memberof methods
 * @async
 * @function getBusinessConnection
 * @this {Bot} Bot instance
 *  * @param { string } businessConnectionId - Unique identifier of the business connection
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.getBusinessConnection(...);
 */
export async function getBusinessConnection(
	this: Bot,
	businessConnectionId: string,
): Promise<any> {
	const apiParams = {
		businessConnectionId: businessConnectionId,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>(
		"getBusinessConnection",
		snakeParams,
	);
	return response;
}
