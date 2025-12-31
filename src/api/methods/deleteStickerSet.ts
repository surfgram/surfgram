/**
 * deleteStickerSet method implementation for Surfgram Telegram Bot SDK
 * @module methods/deleteStickerSet
 * @description Use this method to delete a sticker set that was created by the bot. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#deleteStickerSet Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to delete a sticker set that was created by the bot. Returns True on success.
 * @memberof methods
 * @async
 * @function deleteStickerSet
 * @this {Bot} Bot instance
 *  * @param { string } name - Sticker set name
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.deleteStickerSet(...);
 */
export async function deleteStickerSet(this: Bot, name: string): Promise<any> {
  const apiParams = {
    name: name,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('deleteStickerSet', snakeParams);
  return response;
}
