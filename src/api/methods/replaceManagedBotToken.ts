/**
 * replaceManagedBotToken method implementation for Surfgram Telegram Bot SDK
 * @module methods/replaceManagedBotToken
 * @description Use this method to revoke the current token of a managed bot and generate a new one. Returns the new token as String on success.
 * @see {@link https://core.telegram.org/bots/api#replaceManagedBotToken Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to revoke the current token of a managed bot and generate a new one. Returns the new token as String on success.
 * @memberof methods
 * @async
 * @function replaceManagedBotToken
 * @this {Bot} Bot instance
 *  * @param { number } userId - User identifier of the managed bot whose token will be replaced
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.replaceManagedBotToken(...);
 */
export async function replaceManagedBotToken(this: Bot, userId: number): Promise<any> {
  const apiParams = {
    userId: userId,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('replaceManagedBotToken', snakeParams);
  return response;
}
