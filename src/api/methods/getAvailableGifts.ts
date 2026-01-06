/**
 * getAvailableGifts method implementation for Surfgram Telegram Bot SDK
 * @module methods/getAvailableGifts
 * @description Returns the list of gifts that can be sent by the bot to users and channel chats. Requires no parameters. Returns a Gifts object.
 * @see {@link https://core.telegram.org/bots/api#getAvailableGifts Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { GetAvailableGiftsParams } from '../interfaces/getAvailableGiftsParams';
import { MessageEntity } from '../types/messageEntity';

/**
 * Returns the list of gifts that can be sent by the bot to users and channel chats. Requires no parameters. Returns a Gifts object.
 * @memberof methods
 * @async
 * @function getAvailableGifts
 * @this {Bot} Bot instance
 * @param { GetAvailableGiftsParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.getAvailableGifts({
 * // ... params
 * });
 */
export async function getAvailableGifts(this: Bot, params: GetAvailableGiftsParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('getAvailableGifts', snakeParams);
  return response;
}
