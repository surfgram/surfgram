/**
 * declineChatJoinRequest method implementation for Surfgram Telegram Bot SDK
 * @module methods/declineChatJoinRequest
 * @description Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can\_invite\_users administrator right. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#declineChatJoinRequest Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can\_invite\_users administrator right. Returns True on success.
 * @memberof methods
 * @async
 * @function declineChatJoinRequest
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
 *  * @param { number } userId - Unique identifier of the target user
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.declineChatJoinRequest(...);
 */
export async function declineChatJoinRequest(
  this: Bot,
  chatId: number | string,
  userId: number
): Promise<any> {
  const apiParams = {
    chatId: chatId,
    userId: userId,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('declineChatJoinRequest', snakeParams);
  return response;
}
