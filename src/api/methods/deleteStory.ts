/**
 * deleteStory method implementation for Surfgram Telegram Bot SDK
 * @module methods/deleteStory
 * @description Deletes a story previously posted by the bot on behalf of a managed business account. Requires the can\_manage\_stories business bot right. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#deleteStory Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Deletes a story previously posted by the bot on behalf of a managed business account. Requires the can\_manage\_stories business bot right. Returns True on success.
 * @memberof methods
 * @async
 * @function deleteStory
 * @this {Bot} Bot instance
 *  * @param { string } businessConnectionId - Unique identifier of the business connection
 *  * @param { number } storyId - Unique identifier of the story to delete
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.deleteStory(...);
 */
export async function deleteStory(
	this: Bot,
	businessConnectionId: string,
	storyId: number,
): Promise<any> {
	const apiParams = {
		businessConnectionId: businessConnectionId,
		storyId: storyId,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>("deleteStory", snakeParams);
	return response;
}
