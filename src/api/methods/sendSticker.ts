/**
 * sendSticker method implementation for Surfgram Telegram Bot SDK
 * @module methods/sendSticker
 * @description Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendSticker Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { SendStickerParams } from "../interfaces/sendStickerParams";
import { InputFile } from "../types/inputFile";
import { SuggestedPostParameters } from "../types/suggestedPostParameters";
import { ReplyParameters } from "../types/replyParameters";
import { InlineKeyboardMarkup } from "../types/inlineKeyboardMarkup";
import { ReplyKeyboardMarkup } from "../types/replyKeyboardMarkup";
import { ReplyKeyboardRemove } from "../types/replyKeyboardRemove";
import { ForceReply } from "../types/forceReply";

/**
 * Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned.
 * @memberof methods
 * @async
 * @function sendSticker
 * @this {Bot} Bot instance
 * @param { SendStickerParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.sendSticker({
 * // ... params
 * });
 */
export async function sendSticker(
	this: Bot,
	params: SendStickerParams,
): Promise<any> {
	const snakeParams = camelToSnake(params);
	const response = await this.callApi<any>("sendSticker", snakeParams);
	return response;
}
