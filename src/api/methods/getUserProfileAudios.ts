/**
 * getUserProfileAudios method implementation for Surfgram Telegram Bot SDK
 * @module methods/getUserProfileAudios
 * @description Use this method to get a list of profile audios for a user. Returns a UserProfileAudios object.
 * @see {@link https://core.telegram.org/bots/api#getUserProfileAudios Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to get a list of profile audios for a user. Returns a UserProfileAudios object.
 * @memberof methods
 * @async
 * @function getUserProfileAudios
 * @this {Bot} Bot instance
 *  * @param { number } userId - Unique identifier of the target user
 *  * @param { number } offset? - Sequential number of the first audio to be returned. By default, all audios are returned.
 *  * @param { number } limit? - Limits the number of audios to be retrieved. Values between 1-100 are accepted. Defaults to 100.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.getUserProfileAudios(...);
 */
export async function getUserProfileAudios(this: Bot, userId: number, offset?: number, limit?: number): Promise<any> {
  const apiParams = {
    userId: userId,
    offset: offset,
    limit: limit,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('getUserProfileAudios', snakeParams);
  return response;
}
