/**
 * setStickerEmojiList method implementation for Surfgram Telegram Bot SDK
 * @module methods/setStickerEmojiList
 * @description Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setStickerEmojiList Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
 * @memberof methods
 * @async
 * @function setStickerEmojiList
 * @this {Bot} Bot instance
 *  * @param { string } sticker - File identifier of the sticker
 *  * @param { string[] } emojiList - A JSON-serialized list of 1-20 emoji associated with the sticker
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setStickerEmojiList(...);
 */
export async function setStickerEmojiList(
  this: Bot,
  sticker: string,
  emojiList: string[]
): Promise<any> {
  const apiParams = {
    sticker: sticker,
    emojiList: emojiList,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('setStickerEmojiList', snakeParams);
  return response;
}
