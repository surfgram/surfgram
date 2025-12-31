/**
 * deleteMessage method implementation for Surfgram Telegram Bot SDK
 * @module methods/deleteMessage
 * @description Use this method to delete a message, including service messages, with the following limitations:- A message can only be deleted if it was sent less than 48 hours ago.- Service messages about a supergroup, channel, or forum topic creation can&#39;t be deleted.- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.- Bots can delete outgoing messages in private chats, groups, and supergroups.- Bots can delete incoming messages in private chats.- Bots granted can\_post\_messages permissions can delete outgoing messages in channels.- If the bot is an administrator of a group, it can delete any message there.- If the bot has can\_delete\_messages administrator right in a supergroup or a channel, it can delete any message there.- If the bot has can\_manage\_direct\_messages administrator right in a channel, it can delete any message in the corresponding direct messages chat.Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#deleteMessage Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Use this method to delete a message, including service messages, with the following limitations:- A message can only be deleted if it was sent less than 48 hours ago.- Service messages about a supergroup, channel, or forum topic creation can&#39;t be deleted.- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.- Bots can delete outgoing messages in private chats, groups, and supergroups.- Bots can delete incoming messages in private chats.- Bots granted can\_post\_messages permissions can delete outgoing messages in channels.- If the bot is an administrator of a group, it can delete any message there.- If the bot has can\_delete\_messages administrator right in a supergroup or a channel, it can delete any message there.- If the bot has can\_manage\_direct\_messages administrator right in a channel, it can delete any message in the corresponding direct messages chat.Returns True on success.
 * @memberof methods
 * @async
 * @function deleteMessage
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
 *  * @param { number } messageId - Identifier of the message to delete
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.deleteMessage(...);
 */
export async function deleteMessage(
	this: Bot,
	chatId: number | string,
	messageId: number,
): Promise<any> {
	const apiParams = {
		chatId: chatId,
		messageId: messageId,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>("deleteMessage", snakeParams);
	return response;
}
