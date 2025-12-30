/**
 * answerShippingQuery method implementation for Surfgram Telegram Bot SDK
 * @module methods/answerShippingQuery
 * @description If you sent an invoice requesting a shipping address and the parameter is\_flexible was specified, the Bot API will send an Update with a shipping\_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.
 * @see {@link https://core.telegram.org/bots/api#answerShippingQuery Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { AnswerShippingQueryParams } from '../interfaces/answerShippingQueryParams';
import { ShippingOption } from '../types/shippingOption';

/**
 * If you sent an invoice requesting a shipping address and the parameter is\_flexible was specified, the Bot API will send an Update with a shipping\_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.
 * @memberof methods
 * @async
 * @function answerShippingQuery
 * @this {Bot} Bot instance
 * @param { AnswerShippingQueryParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.answerShippingQuery({
 * // ... params
 * });
 */
export async function answerShippingQuery(
  this: Bot,
  params: AnswerShippingQueryParams
): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('answerShippingQuery', snakeParams);
  return response;
}
