/**
 * getMyDescription method implementation for Surfgram Telegram Bot SDK
 * @module methods/getMyDescription
 * @description Use this method to get the current bot description for the given user language. Returns BotDescription on success.
 * @see {@link https://core.telegram.org/bots/api#getMyDescription Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to get the current bot description for the given user language. Returns BotDescription on success.
 * @memberof methods
 * @async
 * @function getMyDescription
 * @this {Bot} Bot instance
 *  * @param { string } languageCode? - A two-letter ISO 639-1 language code or an empty string
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.getMyDescription(...);
 */
export async function getMyDescription(this: Bot, languageCode?: string): Promise<any> {
  const apiParams = {
    languageCode: languageCode,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('getMyDescription', snakeParams);
  return response;
}
