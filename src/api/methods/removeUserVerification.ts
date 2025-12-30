/**
 * removeUserVerification method implementation for Surfgram Telegram Bot SDK
 * @module methods/removeUserVerification
 * @description Removes verification from a user who is currently verified on behalf of the organization represented by the bot. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#removeUserVerification Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Removes verification from a user who is currently verified on behalf of the organization represented by the bot. Returns True on success.
 * @memberof methods
 * @async
 * @function removeUserVerification
 * @this {Bot} Bot instance
 *  * @param { number } userId - Unique identifier of the target user
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.removeUserVerification(...);
 */
export async function removeUserVerification(this: Bot, userId: number): Promise<any> {
  const apiParams = {
    userId: userId,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('removeUserVerification', snakeParams);
  return response;
}
