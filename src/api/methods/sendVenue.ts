/**
 * sendVenue method implementation for Surfgram Telegram Bot SDK
 * @module methods/sendVenue
 * @description Use this method to send information about a venue. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendVenue Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { SendVenueParams } from '../interfaces/sendVenueParams';
import { SuggestedPostParameters } from '../types/suggestedPostParameters';
import { ReplyParameters } from '../types/replyParameters';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';
import { ReplyKeyboardMarkup } from '../types/replyKeyboardMarkup';
import { ReplyKeyboardRemove } from '../types/replyKeyboardRemove';
import { ForceReply } from '../types/forceReply';

/**
 * Use this method to send information about a venue. On success, the sent Message is returned.
 * @memberof methods
 * @async
 * @function sendVenue
 * @this {Bot} Bot instance
 * @param { SendVenueParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.sendVenue({
 * // ... params
 * });
 */
export async function sendVenue(this: Bot, params: SendVenueParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('sendVenue', snakeParams);
  return response;
}
