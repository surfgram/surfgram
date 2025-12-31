/**
 * sendAnimation method implementation for Surfgram Telegram Bot SDK
 * @module methods/sendAnimation
 * @description Use this method to send animation files \(GIF or H.264/MPEG-4 AVC video without sound\). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.
 * @see {@link https://core.telegram.org/bots/api#sendAnimation Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { SendAnimationParams } from "../interfaces/sendAnimationParams";
import { InputFile } from "../types/inputFile";
import { MessageEntity } from "../types/messageEntity";
import { SuggestedPostParameters } from "../types/suggestedPostParameters";
import { ReplyParameters } from "../types/replyParameters";
import { InlineKeyboardMarkup } from "../types/inlineKeyboardMarkup";
import { ReplyKeyboardMarkup } from "../types/replyKeyboardMarkup";
import { ReplyKeyboardRemove } from "../types/replyKeyboardRemove";
import { ForceReply } from "../types/forceReply";

/**
 * Use this method to send animation files \(GIF or H.264/MPEG-4 AVC video without sound\). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.
 * @memberof methods
 * @async
 * @function sendAnimation
 * @this {Bot} Bot instance
 * @param { SendAnimationParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.sendAnimation({
 * // ... params
 * });
 */
export async function sendAnimation(
	this: Bot,
	params: SendAnimationParams,
): Promise<any> {
	const snakeParams = camelToSnake(params);
	const response = await this.callApi<any>("sendAnimation", snakeParams);
	return response;
}
