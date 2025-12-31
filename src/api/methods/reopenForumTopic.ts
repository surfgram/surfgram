/**
 * reopenForumTopic method implementation for Surfgram Telegram Bot SDK
 * @module methods/reopenForumTopic
 * @description Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights, unless it is the creator of the topic. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#reopenForumTopic Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights, unless it is the creator of the topic. Returns True on success.
 * @memberof methods
 * @async
 * @function reopenForumTopic
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\)
 *  * @param { number } messageThreadId - Unique identifier for the target message thread of the forum topic
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.reopenForumTopic(...);
 */
export async function reopenForumTopic(
	this: Bot,
	chatId: number | string,
	messageThreadId: number,
): Promise<any> {
	const apiParams = {
		chatId: chatId,
		messageThreadId: messageThreadId,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>("reopenForumTopic", snakeParams);
	return response;
}
