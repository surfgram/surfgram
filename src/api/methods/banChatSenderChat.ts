/**
 * banChatSenderChat method implementation for Surfgram Telegram Bot SDK
 * @module methods/banChatSenderChat
 * @description Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won&#39;t be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#banChatSenderChat Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won&#39;t be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success.
 * @memberof methods
 * @async
 * @function banChatSenderChat
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
 *  * @param { number } senderChatId - Unique identifier of the target sender chat
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.banChatSenderChat(...);
 */
export async function banChatSenderChat(
  this: Bot,
  chatId: number | string,
  senderChatId: number
): Promise<any> {
  const apiParams = {
    chatId: chatId,
    senderChatId: senderChatId,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('banChatSenderChat', snakeParams);
  return response;
}
