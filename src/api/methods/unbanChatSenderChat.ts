/**
 * unbanChatSenderChat method implementation for Surfgram Telegram Bot SDK
 * @module methods/unbanChatSenderChat
 * @description Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#unbanChatSenderChat Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success.
 * @memberof methods
 * @async
 * @function unbanChatSenderChat
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
 *  * @param { number } senderChatId - Unique identifier of the target sender chat
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.unbanChatSenderChat(...);
 */
export async function unbanChatSenderChat(
  this: Bot,
  chatId: number | string,
  senderChatId: number
): Promise<any> {
  const apiParams = {
    chatId: chatId,
    senderChatId: senderChatId,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('unbanChatSenderChat', snakeParams);
  return response;
}
