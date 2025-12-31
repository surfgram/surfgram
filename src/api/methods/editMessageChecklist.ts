/**
 * editMessageChecklist method implementation for Surfgram Telegram Bot SDK
 * @module methods/editMessageChecklist
 * @description Use this method to edit a checklist on behalf of a connected business account. On success, the edited Message is returned.
 * @see {@link https://core.telegram.org/bots/api#editMessageChecklist Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { EditMessageChecklistParams } from "../interfaces/editMessageChecklistParams";
import { InputChecklist } from "../types/inputChecklist";
import { InlineKeyboardMarkup } from "../types/inlineKeyboardMarkup";

/**
 * Use this method to edit a checklist on behalf of a connected business account. On success, the edited Message is returned.
 * @memberof methods
 * @async
 * @function editMessageChecklist
 * @this {Bot} Bot instance
 * @param { EditMessageChecklistParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.editMessageChecklist({
 * // ... params
 * });
 */
export async function editMessageChecklist(
	this: Bot,
	params: EditMessageChecklistParams,
): Promise<any> {
	const snakeParams = camelToSnake(params);
	const response = await this.callApi<any>("editMessageChecklist", snakeParams);
	return response;
}
