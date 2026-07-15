/**
 * getUserPersonalChatMessages method implementation for Surfgram Telegram Bot SDK
 * @module methods/getUserPersonalChatMessages
 * @description Use this method to get the last messages from the personal chat \(i.e., the chat currently added to their profile\) of a given user. On success, an Array of Message objects is returned.
 * @see {@link https://core.telegram.org/bots/api#getUserPersonalChatMessages Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to get the last messages from the personal chat \(i.e., the chat currently added to their profile\) of a given user. On success, an Array of Message objects is returned.
 * @memberof methods
 * @async
 * @function getUserPersonalChatMessages
 * @this {Bot} Bot instance
 *  * @param { number } userId - Unique identifier for the target user
 *  * @param { number } limit - The maximum number of messages to return; 1-20
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.getUserPersonalChatMessages(...);
 */
export async function getUserPersonalChatMessages(this: Bot, userId: number, limit: number): Promise<any> {
  const apiParams = {
    userId: userId,
    limit: limit,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('getUserPersonalChatMessages', snakeParams);
  return response;
}
