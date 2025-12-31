/**
 * copyMessage method implementation for Surfgram Telegram Bot SDK
 * @module methods/copyMessage
 * @description Use this method to copy messages of any kind. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can&#39;t be copied. A quiz poll can be copied only if the value of the field correct\_option\_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn&#39;t have a link to the original message. Returns the MessageId of the sent message on success.
 * @see {@link https://core.telegram.org/bots/api#copyMessage Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { CopyMessageParams } from "../interfaces/copyMessageParams";
import { MessageEntity } from "../types/messageEntity";
import { SuggestedPostParameters } from "../types/suggestedPostParameters";
import { ReplyParameters } from "../types/replyParameters";
import { InlineKeyboardMarkup } from "../types/inlineKeyboardMarkup";
import { ReplyKeyboardMarkup } from "../types/replyKeyboardMarkup";
import { ReplyKeyboardRemove } from "../types/replyKeyboardRemove";
import { ForceReply } from "../types/forceReply";

/**
 * Use this method to copy messages of any kind. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can&#39;t be copied. A quiz poll can be copied only if the value of the field correct\_option\_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn&#39;t have a link to the original message. Returns the MessageId of the sent message on success.
 * @memberof methods
 * @async
 * @function copyMessage
 * @this {Bot} Bot instance
 * @param { CopyMessageParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.copyMessage({
 * // ... params
 * });
 */
export async function copyMessage(
	this: Bot,
	params: CopyMessageParams,
): Promise<any> {
	const snakeParams = camelToSnake(params);
	const response = await this.callApi<any>("copyMessage", snakeParams);
	return response;
}
