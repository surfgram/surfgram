/**
 * sendInvoice method implementation for Surfgram Telegram Bot SDK
 * @module methods/sendInvoice
 * @description Use this method to send invoices. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendInvoice Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { SendInvoiceParams } from '../interfaces/sendInvoiceParams';
import { LabeledPrice } from '../types/labeledPrice';
import { SuggestedPostParameters } from '../types/suggestedPostParameters';
import { ReplyParameters } from '../types/replyParameters';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';

/**
 * Use this method to send invoices. On success, the sent Message is returned.
 * @memberof methods
 * @async
 * @function sendInvoice
 * @this {Bot} Bot instance
 * @param { SendInvoiceParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.sendInvoice({
 * // ... params
 * });
 */
export async function sendInvoice(this: Bot, params: SendInvoiceParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('sendInvoice', snakeParams);
  return response;
}
