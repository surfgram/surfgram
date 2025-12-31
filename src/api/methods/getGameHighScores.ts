/**
 * getGameHighScores method implementation for Surfgram Telegram Bot SDK
 * @module methods/getGameHighScores
 * @description Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects.
 * @see {@link https://core.telegram.org/bots/api#getGameHighScores Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects.
 * @memberof methods
 * @async
 * @function getGameHighScores
 * @this {Bot} Bot instance
 *  * @param { number } userId - Target user id
 *  * @param { number } chatId? - Required if inline\_message\_id is not specified. Unique identifier for the target chat
 *  * @param { number } messageId? - Required if inline\_message\_id is not specified. Identifier of the sent message
 *  * @param { string } inlineMessageId? - Required if chat\_id and message\_id are not specified. Identifier of the inline message
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.getGameHighScores(...);
 */
export async function getGameHighScores(this: Bot, userId: number, chatId?: number, messageId?: number, inlineMessageId?: string): Promise<any> {
  const apiParams = {
    userId: userId,
    chatId: chatId,
    messageId: messageId,
    inlineMessageId: inlineMessageId,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('getGameHighScores', snakeParams);
  return response;
}
