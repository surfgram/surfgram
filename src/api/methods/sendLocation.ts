/**
 * sendLocation method implementation for Surfgram Telegram Bot SDK
 * @module methods/sendLocation
 * @description Use this method to send point on the map. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendLocation Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { SendLocationParams } from '../interfaces/sendLocationParams';
import { SuggestedPostParameters } from '../types/suggestedPostParameters';
import { ReplyParameters } from '../types/replyParameters';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';
import { ReplyKeyboardMarkup } from '../types/replyKeyboardMarkup';
import { ReplyKeyboardRemove } from '../types/replyKeyboardRemove';
import { ForceReply } from '../types/forceReply';

/**
 * Use this method to send point on the map. On success, the sent Message is returned.
 * @memberof methods
 * @async
 * @function sendLocation
 * @this {Bot} Bot instance
 * @param { SendLocationParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.sendLocation({
 * // ... params
 * });
 */
export async function sendLocation(this: Bot, params: SendLocationParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('sendLocation', snakeParams);
  return response;
}
