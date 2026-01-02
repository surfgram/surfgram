/**
 * repostStory method implementation for Surfgram Telegram Bot SDK
 * @module methods/repostStory
 * @description Reposts a story on behalf of a business account from another business account. Both business accounts must be managed by the same bot, and the story on the source account must have been posted \(or reposted\) by the bot. Requires the can\_manage\_stories business bot right for both business accounts. Returns Story on success.
 * @see {@link https://core.telegram.org/bots/api#repostStory Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { RepostStoryParams } from "../interfaces/repostStoryParams";

/**
 * Reposts a story on behalf of a business account from another business account. Both business accounts must be managed by the same bot, and the story on the source account must have been posted \(or reposted\) by the bot. Requires the can\_manage\_stories business bot right for both business accounts. Returns Story on success.
 * @memberof methods
 * @async
 * @function repostStory
 * @this {Bot} Bot instance
 * @param { RepostStoryParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.repostStory({
 * // ... params
 * });
 */
export async function repostStory(
	this: Bot,
	params: RepostStoryParams,
): Promise<any> {
	const snakeParams = camelToSnake(params);
	const response = await this.callApi<any>("repostStory", snakeParams);
	return response;
}
