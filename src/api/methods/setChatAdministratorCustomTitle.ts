/**
 * setChatAdministratorCustomTitle method implementation for Surfgram Telegram Bot SDK
 * @module methods/setChatAdministratorCustomTitle
 * @description Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setChatAdministratorCustomTitle Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.
 * @memberof methods
 * @async
 * @function setChatAdministratorCustomTitle
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\)
 *  * @param { number } userId - Unique identifier of the target user
 *  * @param { string } customTitle - New custom title for the administrator; 0-16 characters, emoji are not allowed
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setChatAdministratorCustomTitle(...);
 */
export async function setChatAdministratorCustomTitle(
  this: Bot,
  chatId: number | string,
  userId: number,
  customTitle: string
): Promise<any> {
  const apiParams = {
    chatId: chatId,
    userId: userId,
    customTitle: customTitle,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('setChatAdministratorCustomTitle', snakeParams);
  return response;
}
