/**
 * getChatGifts method implementation for Surfgram Telegram Bot SDK
 * @module methods/getChatGifts
 * @description Returns the gifts owned by a chat. Returns OwnedGifts on success.
 * @see {@link https://core.telegram.org/bots/api#getChatGifts Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { GetChatGiftsParams } from '../interfaces/getChatGiftsParams';

/**
 * Returns the gifts owned by a chat. Returns OwnedGifts on success.
 * @memberof methods
 * @async
 * @function getChatGifts
 * @this {Bot} Bot instance
 * @param { GetChatGiftsParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.getChatGifts({
 * // ... params
 * });
 */
export async function getChatGifts(this: Bot, params: GetChatGiftsParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('getChatGifts', snakeParams);
  return response;
}
