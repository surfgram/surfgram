/**
 * getChatAdministrators method implementation for Surfgram Telegram Bot SDK
 * @module methods/getChatAdministrators
 * @description Use this method to get a list of administrators in a chat, which aren&#39;t bots. Returns an Array of ChatMember objects.
 * @see {@link https://core.telegram.org/bots/api#getChatAdministrators Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to get a list of administrators in a chat, which aren&#39;t bots. Returns an Array of ChatMember objects.
 * @memberof methods
 * @async
 * @function getChatAdministrators
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target supergroup or channel \(in the format @channelusername\)
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.getChatAdministrators(...);
 */
export async function getChatAdministrators(this: Bot, chatId: number | string): Promise<any> {
  const apiParams = {
    chatId: chatId,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('getChatAdministrators', snakeParams);
  return response;
}
