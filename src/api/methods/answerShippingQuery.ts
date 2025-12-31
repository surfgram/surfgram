/**
 * answerShippingQuery method implementation for Surfgram Telegram Bot SDK
 * @module methods/answerShippingQuery
 * @description If you sent an invoice requesting a shipping address and the parameter is\_flexible was specified, the Bot API will send an Update with a shipping\_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.
 * @see {@link https://core.telegram.org/bots/api#answerShippingQuery Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { ShippingOption } from '../types/shippingOption';

/**
 * If you sent an invoice requesting a shipping address and the parameter is\_flexible was specified, the Bot API will send an Update with a shipping\_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.
 * @memberof methods
 * @async
 * @function answerShippingQuery
 * @this {Bot} Bot instance
 *  * @param { string } shippingQueryId - Unique identifier for the query to be answered
 *  * @param { boolean } ok - Pass True if delivery to the specified address is possible and False if there are any problems \(for example, if delivery to the specified address is not possible\)
 *  * @param { ShippingOption[] } shippingOptions? - Required if ok is True. A JSON-serialized array of available shipping options.
 *  * @param { string } errorMessage? - Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order \(e.g. “Sorry, delivery to your desired address is unavailable”\). Telegram will display this message to the user.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.answerShippingQuery(...);
 */
export async function answerShippingQuery(
  this: Bot,
  shippingQueryId: string,
  ok: boolean,
  shippingOptions?: ShippingOption[],
  errorMessage?: string
): Promise<any> {
  const apiParams = {
    shippingQueryId: shippingQueryId,
    ok: ok,
    shippingOptions: shippingOptions,
    errorMessage: errorMessage,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('answerShippingQuery', snakeParams);
  return response;
}
