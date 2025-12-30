/**
 * addStickerToSet method implementation for Surfgram Telegram Bot SDK
 * @module methods/addStickerToSet
 * @description Use this method to add a new sticker to a set created by the bot. Emoji sticker sets can have up to 200 stickers. Other sticker sets can have up to 120 stickers. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#addStickerToSet Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { InputSticker } from '../types/inputSticker';

/**
 * Use this method to add a new sticker to a set created by the bot. Emoji sticker sets can have up to 200 stickers. Other sticker sets can have up to 120 stickers. Returns True on success.
 * @memberof methods
 * @async
 * @function addStickerToSet
 * @this {Bot} Bot instance
 *  * @param { number } userId - User identifier of sticker set owner
 *  * @param { string } name - Sticker set name
 *  * @param { InputSticker } sticker - A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set isn't changed.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.addStickerToSet(...);
 */
export async function addStickerToSet(
  this: Bot,
  userId: number,
  name: string,
  sticker: InputSticker
): Promise<any> {
  const apiParams = {
    userId: userId,
    name: name,
    sticker: sticker,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('addStickerToSet', snakeParams);
  return response;
}
