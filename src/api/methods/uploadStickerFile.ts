/**
 * uploadStickerFile method implementation for Surfgram Telegram Bot SDK
 * @module methods/uploadStickerFile
 * @description Use this method to upload a file with a sticker for later use in the createNewStickerSet, addStickerToSet, or replaceStickerInSet methods \(the file can be used multiple times\). Returns the uploaded File on success.
 * @see {@link https://core.telegram.org/bots/api#uploadStickerFile Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { InputFile } from '../types/inputFile';

/**
 * Use this method to upload a file with a sticker for later use in the createNewStickerSet, addStickerToSet, or replaceStickerInSet methods \(the file can be used multiple times\). Returns the uploaded File on success.
 * @memberof methods
 * @async
 * @function uploadStickerFile
 * @this {Bot} Bot instance
 *  * @param { number } userId - User identifier of sticker file owner
 *  * @param { InputFile } sticker - A file with the sticker in .WEBP, .PNG, .TGS, or .WEBM format. See https://core.telegram.org/stickers for technical requirements. More information on Sending Files »
 *  * @param { string } stickerFormat - Format of the sticker, must be one of “static”, “animated”, “video”
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.uploadStickerFile(...);
 */
export async function uploadStickerFile(
  this: Bot,
  userId: number,
  sticker: InputFile,
  stickerFormat: string
): Promise<any> {
  const apiParams = {
    userId: userId,
    sticker: sticker,
    stickerFormat: stickerFormat,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('uploadStickerFile', snakeParams);
  return response;
}
