/**
 * getManagedBotAccessSettings method implementation for Surfgram Telegram Bot SDK
 * @module methods/getManagedBotAccessSettings
 * @description Use this method to get the access settings of a managed bot. Returns a BotAccessSettings object on success.
 * @see {@link https://core.telegram.org/bots/api#getManagedBotAccessSettings Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to get the access settings of a managed bot. Returns a BotAccessSettings object on success.
 * @memberof methods
 * @async
 * @function getManagedBotAccessSettings
 * @this {Bot} Bot instance
 *  * @param { number } userId - User identifier of the managed bot whose access settings will be returned
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.getManagedBotAccessSettings(...);
 */
export async function getManagedBotAccessSettings(this: Bot, userId: number): Promise<any> {
  const apiParams = {
    userId: userId,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('getManagedBotAccessSettings', snakeParams);
  return response;
}
