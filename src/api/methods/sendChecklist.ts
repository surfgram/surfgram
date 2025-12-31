/**
 * sendChecklist method implementation for Surfgram Telegram Bot SDK
 * @module methods/sendChecklist
 * @description Use this method to send a checklist on behalf of a connected business account. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendChecklist Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { SendChecklistParams } from "../interfaces/sendChecklistParams";
import { InputChecklist } from "../types/inputChecklist";
import { ReplyParameters } from "../types/replyParameters";
import { InlineKeyboardMarkup } from "../types/inlineKeyboardMarkup";

/**
 * Use this method to send a checklist on behalf of a connected business account. On success, the sent Message is returned.
 * @memberof methods
 * @async
 * @function sendChecklist
 * @this {Bot} Bot instance
 * @param { SendChecklistParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.sendChecklist({
 * // ... params
 * });
 */
export async function sendChecklist(
	this: Bot,
	params: SendChecklistParams,
): Promise<any> {
	const snakeParams = camelToSnake(params);
	const response = await this.callApi<any>("sendChecklist", snakeParams);
	return response;
}
