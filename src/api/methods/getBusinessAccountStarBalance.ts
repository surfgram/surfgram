/**
 * getBusinessAccountStarBalance method implementation for Surfgram Telegram Bot SDK
 * @module methods/getBusinessAccountStarBalance
 * @description Returns the amount of Telegram Stars owned by a managed business account. Requires the can\_view\_gifts\_and\_stars business bot right. Returns StarAmount on success.
 * @see {@link https://core.telegram.org/bots/api#getBusinessAccountStarBalance Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Returns the amount of Telegram Stars owned by a managed business account. Requires the can\_view\_gifts\_and\_stars business bot right. Returns StarAmount on success.
 * @memberof methods
 * @async
 * @function getBusinessAccountStarBalance
 * @this {Bot} Bot instance
 *  * @param { string } businessConnectionId - Unique identifier of the business connection
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.getBusinessAccountStarBalance(...);
 */
export async function getBusinessAccountStarBalance(
	this: Bot,
	businessConnectionId: string,
): Promise<any> {
	const apiParams = {
		businessConnectionId: businessConnectionId,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>(
		"getBusinessAccountStarBalance",
		snakeParams,
	);
	return response;
}
