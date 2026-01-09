/**
 * getChatMemberCount method implementation for Surfgram Telegram Bot SDK
 * @module methods/getChatMemberCount
 * @description Use this method to get the number of members in a chat. Returns Int on success.
 * @see {@link https://core.telegram.org/bots/api#getChatMemberCount Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to get the number of members in a chat. Returns Int on success.
 * @memberof methods
 * @async
 * @function getChatMemberCount
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target supergroup or channel \(in the format @channelusername\)
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.getChatMemberCount(...);
 */
export async function getChatMemberCount(this: Bot, chatId: number | string): Promise<any> {
  const apiParams = {
    chatId: chatId,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('getChatMemberCount', snakeParams);
  return response;
}
