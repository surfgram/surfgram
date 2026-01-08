/**
 * setStickerKeywords method implementation for Surfgram Telegram Bot SDK
 * @module methods/setStickerKeywords
 * @description Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setStickerKeywords Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
 * @memberof methods
 * @async
 * @function setStickerKeywords
 * @this {Bot} Bot instance
 *  * @param { string } sticker - File identifier of the sticker
 *  * @param { string[] } keywords? - A JSON-serialized list of 0-20 search keywords for the sticker with total length of up to 64 characters
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setStickerKeywords(...);
 */
export async function setStickerKeywords(this: Bot, sticker: string, keywords?: string[]): Promise<any> {
  const apiParams = {
    sticker: sticker,
    keywords: keywords,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('setStickerKeywords', snakeParams);
  return response;
}
