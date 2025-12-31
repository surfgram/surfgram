/**
 * copyMessages method implementation for Surfgram Telegram Bot SDK
 * @module methods/copyMessages
 * @description Use this method to copy messages of any kind. If some of the specified messages can&#39;t be found or copied, they are skipped. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can&#39;t be copied. A quiz poll can be copied only if the value of the field correct\_option\_id is known to the bot. The method is analogous to the method forwardMessages, but the copied messages don&#39;t have a link to the original message. Album grouping is kept for copied messages. On success, an array of MessageId of the sent messages is returned.
 * @see {@link https://core.telegram.org/bots/api#copyMessages Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { CopyMessagesParams } from "../interfaces/copyMessagesParams";

/**
 * Use this method to copy messages of any kind. If some of the specified messages can&#39;t be found or copied, they are skipped. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can&#39;t be copied. A quiz poll can be copied only if the value of the field correct\_option\_id is known to the bot. The method is analogous to the method forwardMessages, but the copied messages don&#39;t have a link to the original message. Album grouping is kept for copied messages. On success, an array of MessageId of the sent messages is returned.
 * @memberof methods
 * @async
 * @function copyMessages
 * @this {Bot} Bot instance
 * @param { CopyMessagesParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.copyMessages({
 * // ... params
 * });
 */
export async function copyMessages(
	this: Bot,
	params: CopyMessagesParams,
): Promise<any> {
	const snakeParams = camelToSnake(params);
	const response = await this.callApi<any>("copyMessages", snakeParams);
	return response;
}
