/**
 * removeMyProfilePhoto method implementation for Surfgram Telegram Bot SDK
 * @module methods/removeMyProfilePhoto
 * @description Removes the profile photo of the bot. Requires no parameters. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#removeMyProfilePhoto Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { MenuButton } from '../types/menuButton';

/**
 * Removes the profile photo of the bot. Requires no parameters. Returns True on success.
 * @memberof methods
 * @async
 * @function removeMyProfilePhoto
 * @this {Bot} Bot instance
 *  * @param { number } chatId? - Unique identifier for the target private chat. If not specified, default bot's menu button will be changed
 *  * @param { MenuButton } menuButton? - A JSON-serialized object for the bot's new menu button. Defaults to MenuButtonDefault
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.removeMyProfilePhoto(...);
 */
export async function removeMyProfilePhoto(this: Bot, chatId?: number, menuButton?: MenuButton): Promise<any> {
  const apiParams = {
    chatId: chatId,
    menuButton: menuButton,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('removeMyProfilePhoto', snakeParams);
  return response;
}
