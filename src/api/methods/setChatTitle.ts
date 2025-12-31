/**
 * setChatTitle method implementation for Surfgram Telegram Bot SDK
 * @module methods/setChatTitle
 * @description Use this method to change the title of a chat. Titles can&#39;t be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setChatTitle Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to change the title of a chat. Titles can&#39;t be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 * @memberof methods
 * @async
 * @function setChatTitle
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
 *  * @param { string } title - New chat title, 1-128 characters
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setChatTitle(...);
 */
export async function setChatTitle(this: Bot, chatId: number | string, title: string): Promise<any> {
  const apiParams = {
    chatId: chatId,
    title: title,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('setChatTitle', snakeParams);
  return response;
}
