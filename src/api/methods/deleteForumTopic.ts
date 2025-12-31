/**
 * deleteForumTopic method implementation for Surfgram Telegram Bot SDK
 * @module methods/deleteForumTopic
 * @description Use this method to delete a forum topic along with all its messages in a forum supergroup chat or a private chat with a user. In the case of a supergroup chat the bot must be an administrator in the chat for this to work and must have the can\_delete\_messages administrator rights. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#deleteForumTopic Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Use this method to delete a forum topic along with all its messages in a forum supergroup chat or a private chat with a user. In the case of a supergroup chat the bot must be an administrator in the chat for this to work and must have the can\_delete\_messages administrator rights. Returns True on success.
 * @memberof methods
 * @async
 * @function deleteForumTopic
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\)
 *  * @param { number } messageThreadId - Unique identifier for the target message thread of the forum topic
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.deleteForumTopic(...);
 */
export async function deleteForumTopic(
	this: Bot,
	chatId: number | string,
	messageThreadId: number,
): Promise<any> {
	const apiParams = {
		chatId: chatId,
		messageThreadId: messageThreadId,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>("deleteForumTopic", snakeParams);
	return response;
}
