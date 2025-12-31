/**
 * answerPreCheckoutQuery method implementation for Surfgram Telegram Bot SDK
 * @module methods/answerPreCheckoutQuery
 * @description Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre\_checkout\_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
 * @see {@link https://core.telegram.org/bots/api#answerPreCheckoutQuery Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre\_checkout\_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
 * @memberof methods
 * @async
 * @function answerPreCheckoutQuery
 * @this {Bot} Bot instance
 *  * @param { string } preCheckoutQueryId - Unique identifier for the query to be answered
 *  * @param { boolean } ok - Specify True if everything is alright \(goods are available, etc.\) and the bot is ready to proceed with the order. Use False if there are any problems.
 *  * @param { string } errorMessage? - Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout \(e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"\). Telegram will display this message to the user.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.answerPreCheckoutQuery(...);
 */
export async function answerPreCheckoutQuery(this: Bot, preCheckoutQueryId: string, ok: boolean, errorMessage?: string): Promise<any> {
  const apiParams = {
    preCheckoutQueryId: preCheckoutQueryId,
    ok: ok,
    errorMessage: errorMessage,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('answerPreCheckoutQuery', snakeParams);
  return response;
}
