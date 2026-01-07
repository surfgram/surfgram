/**
 * setBusinessAccountBio method implementation for Surfgram Telegram Bot SDK
 * @module methods/setBusinessAccountBio
 * @description Changes the bio of a managed business account. Requires the can\_change\_bio business bot right. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setBusinessAccountBio Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Changes the bio of a managed business account. Requires the can\_change\_bio business bot right. Returns True on success.
 * @memberof methods
 * @async
 * @function setBusinessAccountBio
 * @this {Bot} Bot instance
 *  * @param { string } businessConnectionId - Unique identifier of the business connection
 *  * @param { string } bio? - The new value of the bio for the business account; 0-140 characters
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setBusinessAccountBio(...);
 */
export async function setBusinessAccountBio(
	this: Bot,
	businessConnectionId: string,
	bio?: string,
): Promise<any> {
	const apiParams = {
		businessConnectionId: businessConnectionId,
		bio: bio,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>(
		"setBusinessAccountBio",
		snakeParams,
	);
	return response;
}
