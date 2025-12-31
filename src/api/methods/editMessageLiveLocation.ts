/**
 * editMessageLiveLocation method implementation for Surfgram Telegram Bot SDK
 * @module methods/editMessageLiveLocation
 * @description Use this method to edit live location messages. A location can be edited until its live\_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
 * @see {@link https://core.telegram.org/bots/api#editMessageLiveLocation Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { EditMessageLiveLocationParams } from "../interfaces/editMessageLiveLocationParams";
import { InlineKeyboardMarkup } from "../types/inlineKeyboardMarkup";

/**
 * Use this method to edit live location messages. A location can be edited until its live\_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
 * @memberof methods
 * @async
 * @function editMessageLiveLocation
 * @this {Bot} Bot instance
 * @param { EditMessageLiveLocationParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.editMessageLiveLocation({
 * // ... params
 * });
 */
export async function editMessageLiveLocation(
	this: Bot,
	params: EditMessageLiveLocationParams,
): Promise<any> {
	const snakeParams = camelToSnake(params);
	const response = await this.callApi<any>(
		"editMessageLiveLocation",
		snakeParams,
	);
	return response;
}
