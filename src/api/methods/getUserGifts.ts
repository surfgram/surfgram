/**
 * getUserGifts method implementation for Surfgram Telegram Bot SDK
 * @module methods/getUserGifts
 * @description Returns the gifts owned and hosted by a user. Returns OwnedGifts on success.
 * @see {@link https://core.telegram.org/bots/api#getUserGifts Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { GetUserGiftsParams } from '../interfaces/getUserGiftsParams';

/**
 * Returns the gifts owned and hosted by a user. Returns OwnedGifts on success.
 * @memberof methods
 * @async
 * @function getUserGifts
 * @this {Bot} Bot instance
 * @param { GetUserGiftsParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.getUserGifts({
 * // ... params
 * });
 */
export async function getUserGifts(this: Bot, params: GetUserGiftsParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('getUserGifts', snakeParams);
  return response;
}
