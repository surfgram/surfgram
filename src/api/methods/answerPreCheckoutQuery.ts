/**
 * answerPreCheckoutQuery method implementation for Surfgram Telegram Bot SDK
 * @module methods/answerPreCheckoutQuery
 * @description Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre\_checkout\_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
 * @see {@link https://core.telegram.org/bots/api#answerPreCheckoutQuery Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { AnswerPreCheckoutQueryParams } from '../interfaces/answerPreCheckoutQueryParams';

/**
 * Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre\_checkout\_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
 * @memberof methods
 * @async
 * @function answerPreCheckoutQuery
 * @this {Bot} Bot instance
 * @param { AnswerPreCheckoutQueryParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.answerPreCheckoutQuery({
 * // ... params
 * });
 */
export async function answerPreCheckoutQuery(
  this: Bot,
  params: AnswerPreCheckoutQueryParams
): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('answerPreCheckoutQuery', snakeParams);
  return response;
}
