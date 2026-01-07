/**
 * sendAudio method implementation for Surfgram Telegram Bot SDK
 * @module methods/sendAudio
 * @description Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
 * @see {@link https://core.telegram.org/bots/api#sendAudio Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { SendAudioParams } from "../interfaces/sendAudioParams";
import { InputFile } from "../types/inputFile";
import { MessageEntity } from "../types/messageEntity";
import { SuggestedPostParameters } from "../types/suggestedPostParameters";
import { ReplyParameters } from "../types/replyParameters";
import { InlineKeyboardMarkup } from "../types/inlineKeyboardMarkup";
import { ReplyKeyboardMarkup } from "../types/replyKeyboardMarkup";
import { ReplyKeyboardRemove } from "../types/replyKeyboardRemove";
import { ForceReply } from "../types/forceReply";

/**
 * Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
 * @memberof methods
 * @async
 * @function sendAudio
 * @this {Bot} Bot instance
 * @param { SendAudioParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.sendAudio({
 * // ... params
 * });
 */
export async function sendAudio(
	this: Bot,
	params: SendAudioParams,
): Promise<any> {
	const snakeParams = camelToSnake(params);
	const response = await this.callApi<any>("sendAudio", snakeParams);
	return response;
}
