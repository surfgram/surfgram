/**
 * answerGuestQuery method implementation for Surfgram Telegram Bot SDK
 * @module methods/answerGuestQuery
 * @description Use this method to reply to a received guest message. On success, a SentGuestMessage object is returned.
 * @see {@link https://core.telegram.org/bots/api#answerGuestQuery Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { InlineQueryResult } from '../types/inlineQueryResult';

/**
 * Use this method to reply to a received guest message. On success, a SentGuestMessage object is returned.
 * @memberof methods
 * @async
 * @function answerGuestQuery
 * @this {Bot} Bot instance
 *  * @param { string } guestQueryId - Unique identifier for the query to be answered
 *  * @param { InlineQueryResult } result - A JSON-serialized object describing the message to be sent
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.answerGuestQuery(...);
 */
export async function answerGuestQuery(this: Bot, guestQueryId: string, result: InlineQueryResult): Promise<any> {
  const apiParams = {
    guestQueryId: guestQueryId,
    result: result,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('answerGuestQuery', snakeParams);
  return response;
}
