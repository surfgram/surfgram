/**
 * getManagedBotToken method implementation for Surfgram Telegram Bot SDK
 * @module methods/getManagedBotToken
 * @description Use this method to get the token of a managed bot. Returns the token as String on success.
 * @see {@link https://core.telegram.org/bots/api#getManagedBotToken Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to get the token of a managed bot. Returns the token as String on success.
 * @memberof methods
 * @async
 * @function getManagedBotToken
 * @this {Bot} Bot instance
 *  * @param { number } userId - User identifier of the managed bot whose token will be returned
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.getManagedBotToken(...);
 */
export async function getManagedBotToken(this: Bot, userId: number): Promise<any> {
  const apiParams = {
    userId: userId,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('getManagedBotToken', snakeParams);
  return response;
}
