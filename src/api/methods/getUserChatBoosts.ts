/**
 * getUserChatBoosts method implementation for Surfgram Telegram Bot SDK
 * @module methods/getUserChatBoosts
 * @description Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a UserChatBoosts object.
 * @see {@link https://core.telegram.org/bots/api#getUserChatBoosts Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a UserChatBoosts object.
 * @memberof methods
 * @async
 * @function getUserChatBoosts
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the chat or username of the channel \(in the format @channelusername\)
 *  * @param { number } userId - Unique identifier of the target user
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.getUserChatBoosts(...);
 */
export async function getUserChatBoosts(this: Bot, chatId: number | string, userId: number): Promise<any> {
  const apiParams = {
    chatId: chatId,
    userId: userId,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('getUserChatBoosts', snakeParams);
  return response;
}
