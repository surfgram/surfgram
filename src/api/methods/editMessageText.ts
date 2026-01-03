/**
 * editMessageText method implementation for Surfgram Telegram Bot SDK
 * @module methods/editMessageText
 * @description Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
 * @see {@link https://core.telegram.org/bots/api#editMessageText Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { EditMessageTextParams } from "../interfaces/editMessageTextParams";
import { MessageEntity } from "../types/messageEntity";
import { LinkPreviewOptions } from "../types/linkPreviewOptions";
import { InlineKeyboardMarkup } from "../types/inlineKeyboardMarkup";

/**
 * Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
 * @memberof methods
 * @async
 * @function editMessageText
 * @this {Bot} Bot instance
 * @param { EditMessageTextParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.editMessageText({
 * // ... params
 * });
 */
export async function editMessageText(
	this: Bot,
	params: EditMessageTextParams,
): Promise<any> {
	const snakeParams = camelToSnake(params);
	const response = await this.callApi<any>("editMessageText", snakeParams);
	return response;
}
