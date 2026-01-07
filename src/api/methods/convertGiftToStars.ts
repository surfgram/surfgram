/**
 * convertGiftToStars method implementation for Surfgram Telegram Bot SDK
 * @module methods/convertGiftToStars
 * @description Converts a given regular gift to Telegram Stars. Requires the can\_convert\_gifts\_to\_stars business bot right. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#convertGiftToStars Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Converts a given regular gift to Telegram Stars. Requires the can\_convert\_gifts\_to\_stars business bot right. Returns True on success.
 * @memberof methods
 * @async
 * @function convertGiftToStars
 * @this {Bot} Bot instance
 *  * @param { string } businessConnectionId - Unique identifier of the business connection
 *  * @param { string } ownedGiftId - Unique identifier of the regular gift that should be converted to Telegram Stars
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.convertGiftToStars(...);
 */
export async function convertGiftToStars(
	this: Bot,
	businessConnectionId: string,
	ownedGiftId: string,
): Promise<any> {
	const apiParams = {
		businessConnectionId: businessConnectionId,
		ownedGiftId: ownedGiftId,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>("convertGiftToStars", snakeParams);
	return response;
}
