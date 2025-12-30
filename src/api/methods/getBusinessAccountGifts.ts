/**
 * getBusinessAccountGifts method implementation for Surfgram Telegram Bot SDK
 * @module methods/getBusinessAccountGifts
 * @description Returns the gifts received and owned by a managed business account. Requires the can\_view\_gifts\_and\_stars business bot right. Returns OwnedGifts on success.
 * @see {@link https://core.telegram.org/bots/api#getBusinessAccountGifts Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { GetBusinessAccountGiftsParams } from '../interfaces/getBusinessAccountGiftsParams';

/**
 * Returns the gifts received and owned by a managed business account. Requires the can\_view\_gifts\_and\_stars business bot right. Returns OwnedGifts on success.
 * @memberof methods
 * @async
 * @function getBusinessAccountGifts
 * @this {Bot} Bot instance
 * @param { GetBusinessAccountGiftsParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.getBusinessAccountGifts({
 * // ... params
 * });
 */
export async function getBusinessAccountGifts(this: Bot, params: GetBusinessAccountGiftsParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('getBusinessAccountGifts', snakeParams);
  return response;
}
