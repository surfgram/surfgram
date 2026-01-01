/**
 * setGameScore method implementation for Surfgram Telegram Bot SDK
 * @module methods/setGameScore
 * @description Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user&#39;s current score in the chat and force is False.
 * @see {@link https://core.telegram.org/bots/api#setGameScore Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { SetGameScoreParams } from "../interfaces/setGameScoreParams";

/**
 * Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user&#39;s current score in the chat and force is False.
 * @memberof methods
 * @async
 * @function setGameScore
 * @this {Bot} Bot instance
 * @param { SetGameScoreParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.setGameScore({
 * // ... params
 * });
 */
export async function setGameScore(
	this: Bot,
	params: SetGameScoreParams,
): Promise<any> {
	const snakeParams = camelToSnake(params);
	const response = await this.callApi<any>("setGameScore", snakeParams);
	return response;
}
