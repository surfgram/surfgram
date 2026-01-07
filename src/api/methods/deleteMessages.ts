/**
 * deleteMessages method implementation for Surfgram Telegram Bot SDK
 * @module methods/deleteMessages
 * @description Use this method to delete multiple messages simultaneously. If some of the specified messages can&#39;t be found, they are skipped. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#deleteMessages Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Use this method to delete multiple messages simultaneously. If some of the specified messages can&#39;t be found, they are skipped. Returns True on success.
 * @memberof methods
 * @async
 * @function deleteMessages
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
 *  * @param { number[] } messageIds - A JSON-serialized list of 1-100 identifiers of messages to delete. See deleteMessage for limitations on which messages can be deleted
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.deleteMessages(...);
 */
export async function deleteMessages(
	this: Bot,
	chatId: number | string,
	messageIds: number[],
): Promise<any> {
	const apiParams = {
		chatId: chatId,
		messageIds: messageIds,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>("deleteMessages", snakeParams);
	return response;
}
