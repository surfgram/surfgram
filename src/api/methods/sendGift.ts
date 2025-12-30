/**
 * sendGift method implementation for Surfgram Telegram Bot SDK
 * @module methods/sendGift
 * @description Sends a gift to the given user or channel chat. The gift can&#39;t be converted to Telegram Stars by the receiver. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#sendGift Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { SendGiftParams } from '../interfaces/sendGiftParams';
import { MessageEntity } from '../types/messageEntity';

/**
 * Sends a gift to the given user or channel chat. The gift can&#39;t be converted to Telegram Stars by the receiver. Returns True on success.
 * @memberof methods
 * @async
 * @function sendGift
 * @this {Bot} Bot instance
 * @param { SendGiftParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.sendGift({
 * // ... params
 * });
 */
export async function sendGift(this: Bot, params: SendGiftParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('sendGift', snakeParams);
  return response;
}
