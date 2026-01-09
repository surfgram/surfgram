/**
 * setBusinessAccountUsername method implementation for Surfgram Telegram Bot SDK
 * @module methods/setBusinessAccountUsername
 * @description Changes the username of a managed business account. Requires the can\_change\_username business bot right. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setBusinessAccountUsername Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Changes the username of a managed business account. Requires the can\_change\_username business bot right. Returns True on success.
 * @memberof methods
 * @async
 * @function setBusinessAccountUsername
 * @this {Bot} Bot instance
 *  * @param { string } businessConnectionId - Unique identifier of the business connection
 *  * @param { string } username? - The new value of the username for the business account; 0-32 characters
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setBusinessAccountUsername(...);
 */
export async function setBusinessAccountUsername(this: Bot, businessConnectionId: string, username?: string): Promise<any> {
  const apiParams = {
    businessConnectionId: businessConnectionId,
    username: username,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('setBusinessAccountUsername', snakeParams);
  return response;
}
