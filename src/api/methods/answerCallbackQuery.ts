/**
 * answerCallbackQuery method implementation for Surfgram Telegram Bot SDK
 * @module methods/answerCallbackQuery
 * @description Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.
 * @see {@link https://core.telegram.org/bots/api#answerCallbackQuery Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { AnswerCallbackQueryParams } from "../interfaces/answerCallbackQueryParams";

/**
 * Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.
 * @memberof methods
 * @async
 * @function answerCallbackQuery
 * @this {Bot} Bot instance
 * @param { AnswerCallbackQueryParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.answerCallbackQuery({
 * // ... params
 * });
 */
export async function answerCallbackQuery(
	this: Bot,
	params: AnswerCallbackQueryParams,
): Promise<any> {
	const snakeParams = camelToSnake(params);
	const response = await this.callApi<any>("answerCallbackQuery", snakeParams);
	return response;
}
