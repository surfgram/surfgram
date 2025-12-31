/**
 * pinChatMessage method implementation for Surfgram Telegram Bot SDK
 * @module methods/pinChatMessage
 * @description Use this method to add a message to the list of pinned messages in a chat. In private chats and channel direct messages chats, all non-service messages can be pinned. Conversely, the bot must be an administrator with the &#39;can\_pin\_messages&#39; right or the &#39;can\_edit\_messages&#39; right to pin messages in groups and channels respectively. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#pinChatMessage Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Use this method to add a message to the list of pinned messages in a chat. In private chats and channel direct messages chats, all non-service messages can be pinned. Conversely, the bot must be an administrator with the &#39;can\_pin\_messages&#39; right or the &#39;can\_edit\_messages&#39; right to pin messages in groups and channels respectively. Returns True on success.
 * @memberof methods
 * @async
 * @function pinChatMessage
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
 *  * @param { number } messageId - Identifier of a message to pin
 *  * @param { string } businessConnectionId? - Unique identifier of the business connection on behalf of which the message will be pinned
 *  * @param { boolean } disableNotification? - Pass True if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.pinChatMessage(...);
 */
export async function pinChatMessage(
	this: Bot,
	chatId: number | string,
	messageId: number,
	businessConnectionId?: string,
	disableNotification?: boolean,
): Promise<any> {
	const apiParams = {
		chatId: chatId,
		messageId: messageId,
		businessConnectionId: businessConnectionId,
		disableNotification: disableNotification,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>("pinChatMessage", snakeParams);
	return response;
}
