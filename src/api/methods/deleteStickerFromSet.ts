/**
 * deleteStickerFromSet method implementation for Surfgram Telegram Bot SDK
 * @module methods/deleteStickerFromSet
 * @description Use this method to delete a sticker from a set created by the bot. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#deleteStickerFromSet Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to delete a sticker from a set created by the bot. Returns True on success.
 * @memberof methods
 * @async
 * @function deleteStickerFromSet
 * @this {Bot} Bot instance
 *  * @param { string } sticker - File identifier of the sticker
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.deleteStickerFromSet(...);
 */
export async function deleteStickerFromSet(this: Bot, sticker: string): Promise<any> {
  const apiParams = {
    sticker: sticker,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('deleteStickerFromSet', snakeParams);
  return response;
}
