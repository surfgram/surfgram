/**
 * sendPhoto method implementation for Surfgram Telegram Bot SDK
 * @module methods/sendPhoto
 * @description Use this method to send photos. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendPhoto Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { SendPhotoParams } from "../interfaces/sendPhotoParams";
import { InputFile } from "../types/inputFile";
import { MessageEntity } from "../types/messageEntity";
import { SuggestedPostParameters } from "../types/suggestedPostParameters";
import { ReplyParameters } from "../types/replyParameters";
import { InlineKeyboardMarkup } from "../types/inlineKeyboardMarkup";
import { ReplyKeyboardMarkup } from "../types/replyKeyboardMarkup";
import { ReplyKeyboardRemove } from "../types/replyKeyboardRemove";
import { ForceReply } from "../types/forceReply";

/**
 * Use this method to send photos. On success, the sent Message is returned.
 * @memberof methods
 * @async
 * @function sendPhoto
 * @this {Bot} Bot instance
 * @param { SendPhotoParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.sendPhoto({
 * // ... params
 * });
 */
export async function sendPhoto(
	this: Bot,
	params: SendPhotoParams,
): Promise<any> {
	const snakeParams = camelToSnake(params);
	const response = await this.callApi<any>("sendPhoto", snakeParams);
	return response;
}
