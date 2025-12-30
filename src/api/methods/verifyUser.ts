/**
 * verifyUser method implementation for Surfgram Telegram Bot SDK
 * @module methods/verifyUser
 * @description Verifies a user on behalf of the organization which is represented by the bot. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#verifyUser Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Verifies a user on behalf of the organization which is represented by the bot. Returns True on success.
 * @memberof methods
 * @async
 * @function verifyUser
 * @this {Bot} Bot instance
 *  * @param { number } userId - Unique identifier of the target user
 *  * @param { string } customDescription? - Custom description for the verification; 0-70 characters. Must be empty if the organization isn't allowed to provide a custom verification description.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.verifyUser(...);
 */
export async function verifyUser(
  this: Bot,
  userId: number,
  customDescription?: string
): Promise<any> {
  const apiParams = {
    userId: userId,
    customDescription: customDescription,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('verifyUser', snakeParams);
  return response;
}
