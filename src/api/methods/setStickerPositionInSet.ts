/**
 * setStickerPositionInSet method implementation for Surfgram Telegram Bot SDK
 * @module methods/setStickerPositionInSet
 * @description Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setStickerPositionInSet Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.
 * @memberof methods
 * @async
 * @function setStickerPositionInSet
 * @this {Bot} Bot instance
 *  * @param { string } sticker - File identifier of the sticker
 *  * @param { number } position - New sticker position in the set, zero-based
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setStickerPositionInSet(...);
 */
export async function setStickerPositionInSet(this: Bot, sticker: string, position: number): Promise<any> {
  const apiParams = {
    sticker: sticker,
    position: position,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('setStickerPositionInSet', snakeParams);
  return response;
}
