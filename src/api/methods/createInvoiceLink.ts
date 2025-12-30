/**
 * createInvoiceLink method implementation for Surfgram Telegram Bot SDK
 * @module methods/createInvoiceLink
 * @description Use this method to create a link for an invoice. Returns the created invoice link as String on success.
 * @see {@link https://core.telegram.org/bots/api#createInvoiceLink Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { CreateInvoiceLinkParams } from '../interfaces/createInvoiceLinkParams';
import { LabeledPrice } from '../types/labeledPrice';

/**
 * Use this method to create a link for an invoice. Returns the created invoice link as String on success.
 * @memberof methods
 * @async
 * @function createInvoiceLink
 * @this {Bot} Bot instance
 * @param { CreateInvoiceLinkParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.createInvoiceLink({
 * // ... params
 * });
 */
export async function createInvoiceLink(this: Bot, params: CreateInvoiceLinkParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('createInvoiceLink', snakeParams);
  return response;
}
