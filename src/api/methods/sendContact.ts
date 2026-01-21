/**
 * sendContact method implementation for Surfgram Telegram Bot SDK
 * @module methods/sendContact
 * @description Use this method to send phone contacts. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendContact Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { SendContactParams } from '../interfaces/sendContactParams';
import { SuggestedPostParameters } from '../types/suggestedPostParameters';
import { ReplyParameters } from '../types/replyParameters';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';
import { ReplyKeyboardMarkup } from '../types/replyKeyboardMarkup';
import { ReplyKeyboardRemove } from '../types/replyKeyboardRemove';
import { ForceReply } from '../types/forceReply';

/**
 * Use this method to send phone contacts. On success, the sent Message is returned.
 * @memberof methods
 * @async
 * @function sendContact
 * @this {Bot} Bot instance
 * @param { SendContactParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.sendContact({
 * // ... params
 * });
 */
export async function sendContact(this: Bot, params: SendContactParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('sendContact', snakeParams);
  return response;
}
