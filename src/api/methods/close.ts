/**
 * close method implementation for Surfgram Telegram Bot SDK
 * @module methods/close
 * @description Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn&#39;t launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns True on success. Requires no parameters.
 * @see {@link https://core.telegram.org/bots/api#close Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { CloseParams } from "../interfaces/closeParams";
import { MessageEntity } from "../types/messageEntity";
import { LinkPreviewOptions } from "../types/linkPreviewOptions";
import { SuggestedPostParameters } from "../types/suggestedPostParameters";
import { ReplyParameters } from "../types/replyParameters";
import { InlineKeyboardMarkup } from "../types/inlineKeyboardMarkup";
import { ReplyKeyboardMarkup } from "../types/replyKeyboardMarkup";
import { ReplyKeyboardRemove } from "../types/replyKeyboardRemove";
import { ForceReply } from "../types/forceReply";

/**
 * Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn&#39;t launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns True on success. Requires no parameters.
 * @memberof methods
 * @async
 * @function close
 * @this {Bot} Bot instance
 * @param { CloseParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.close({
 * // ... params
 * });
 */
export async function close(this: Bot, params: CloseParams): Promise<any> {
	const snakeParams = camelToSnake(params);
	const response = await this.callApi<any>("close", snakeParams);
	return response;
}
