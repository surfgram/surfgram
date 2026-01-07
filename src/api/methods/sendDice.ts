/**
 * sendDice method implementation for Surfgram Telegram Bot SDK
 * @module methods/sendDice
 * @description Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendDice Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { SendDiceParams } from "../interfaces/sendDiceParams";
import { SuggestedPostParameters } from "../types/suggestedPostParameters";
import { ReplyParameters } from "../types/replyParameters";
import { InlineKeyboardMarkup } from "../types/inlineKeyboardMarkup";
import { ReplyKeyboardMarkup } from "../types/replyKeyboardMarkup";
import { ReplyKeyboardRemove } from "../types/replyKeyboardRemove";
import { ForceReply } from "../types/forceReply";

/**
 * Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.
 * @memberof methods
 * @async
 * @function sendDice
 * @this {Bot} Bot instance
 * @param { SendDiceParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.sendDice({
 * // ... params
 * });
 */
export async function sendDice(
	this: Bot,
	params: SendDiceParams,
): Promise<any> {
	const snakeParams = camelToSnake(params);
	const response = await this.callApi<any>("sendDice", snakeParams);
	return response;
}
