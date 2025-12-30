/**
 * setStickerSetTitle method implementation for Surfgram Telegram Bot SDK
 * @module methods/setStickerSetTitle
 * @description Use this method to set the title of a created sticker set. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setStickerSetTitle Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to set the title of a created sticker set. Returns True on success.
 * @memberof methods
 * @async
 * @function setStickerSetTitle
 * @this {Bot} Bot instance
 *  * @param { string } name - Sticker set name
 *  * @param { string } title - Sticker set title, 1-64 characters
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setStickerSetTitle(...);
 */
export async function setStickerSetTitle(this: Bot, name: string, title: string): Promise<any> {
  const apiParams = {
    name: name,
    title: title,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('setStickerSetTitle', snakeParams);
  return response;
}
