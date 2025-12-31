/**
 * unpinAllForumTopicMessages method implementation for Surfgram Telegram Bot SDK
 * @module methods/unpinAllForumTopicMessages
 * @description Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat for this to work and must have the can\_pin\_messages administrator right in the supergroup. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#unpinAllForumTopicMessages Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat for this to work and must have the can\_pin\_messages administrator right in the supergroup. Returns True on success.
 * @memberof methods
 * @async
 * @function unpinAllForumTopicMessages
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\)
 *  * @param { number } messageThreadId - Unique identifier for the target message thread of the forum topic
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.unpinAllForumTopicMessages(...);
 */
export async function unpinAllForumTopicMessages(
	this: Bot,
	chatId: number | string,
	messageThreadId: number,
): Promise<any> {
	const apiParams = {
		chatId: chatId,
		messageThreadId: messageThreadId,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>(
		"unpinAllForumTopicMessages",
		snakeParams,
	);
	return response;
}
