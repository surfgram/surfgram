/**
 * createNewStickerSet method implementation for Surfgram Telegram Bot SDK
 * @module methods/createNewStickerSet
 * @description Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#createNewStickerSet Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { CreateNewStickerSetParams } from '../interfaces/createNewStickerSetParams';
import { InputSticker } from '../types/inputSticker';

/**
 * Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success.
 * @memberof methods
 * @async
 * @function createNewStickerSet
 * @this {Bot} Bot instance
 * @param { CreateNewStickerSetParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.createNewStickerSet({
 * // ... params
 * });
 */
export async function createNewStickerSet(this: Bot, params: CreateNewStickerSetParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('createNewStickerSet', snakeParams);
  return response;
}
