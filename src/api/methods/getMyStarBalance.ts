/**
 * getMyStarBalance method implementation for Surfgram Telegram Bot SDK
 * @module methods/getMyStarBalance
 * @description A method to get the current Telegram Stars balance of the bot. Requires no parameters. On success, returns a StarAmount object.
 * @see {@link https://core.telegram.org/bots/api#getMyStarBalance Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * A method to get the current Telegram Stars balance of the bot. Requires no parameters. On success, returns a StarAmount object.
 * @memberof methods
 * @async
 * @function getMyStarBalance
 * @this {Bot} Bot instance
 *  * @param { number } offset? - Number of transactions to skip in the response
 *  * @param { number } limit? - The maximum number of transactions to be retrieved. Values between 1-100 are accepted. Defaults to 100.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.getMyStarBalance(...);
 */
export async function getMyStarBalance(
	this: Bot,
	offset?: number,
	limit?: number,
): Promise<any> {
	const apiParams = {
		offset: offset,
		limit: limit,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>("getMyStarBalance", snakeParams);
	return response;
}
