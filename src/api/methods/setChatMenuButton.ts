/**
 * setChatMenuButton method implementation for Surfgram Telegram Bot SDK
 * @module methods/setChatMenuButton
 * @description Use this method to change the bot&#39;s menu button in a private chat, or the default menu button. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setChatMenuButton Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { MenuButton } from '../types/menuButton';

/**
 * Use this method to change the bot&#39;s menu button in a private chat, or the default menu button. Returns True on success.
 * @memberof methods
 * @async
 * @function setChatMenuButton
 * @this {Bot} Bot instance
 *  * @param { number } chatId? - Unique identifier for the target private chat. If not specified, default bot's menu button will be changed
 *  * @param { MenuButton } menuButton? - A JSON-serialized object for the bot's new menu button. Defaults to MenuButtonDefault
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setChatMenuButton(...);
 */
export async function setChatMenuButton(this: Bot, chatId?: number, menuButton?: MenuButton): Promise<any> {
  const apiParams = {
    chatId: chatId,
    menuButton: menuButton,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('setChatMenuButton', snakeParams);
  return response;
}
