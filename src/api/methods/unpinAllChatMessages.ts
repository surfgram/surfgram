/**
 * unpinAllChatMessages method implementation for Surfgram Telegram Bot SDK
 * @module methods/unpinAllChatMessages
 * @description Use this method to clear the list of pinned messages in a chat. In private chats and channel direct messages chats, no additional rights are required to unpin all pinned messages. Conversely, the bot must be an administrator with the &#39;can\_pin\_messages&#39; right or the &#39;can\_edit\_messages&#39; right to unpin all pinned messages in groups and channels respectively. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#unpinAllChatMessages Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Use this method to clear the list of pinned messages in a chat. In private chats and channel direct messages chats, no additional rights are required to unpin all pinned messages. Conversely, the bot must be an administrator with the &#39;can\_pin\_messages&#39; right or the &#39;can\_edit\_messages&#39; right to unpin all pinned messages in groups and channels respectively. Returns True on success.
 * @memberof methods
 * @async
 * @function unpinAllChatMessages
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.unpinAllChatMessages(...);
 */
export async function unpinAllChatMessages(
	this: Bot,
	chatId: number | string,
): Promise<any> {
	const apiParams = {
		chatId: chatId,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>("unpinAllChatMessages", snakeParams);
	return response;
}
