/**
 * answerWebAppQuery method implementation for Surfgram Telegram Bot SDK
 * @module methods/answerWebAppQuery
 * @description Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.
 * @see {@link https://core.telegram.org/bots/api#answerWebAppQuery Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { InlineQueryResult } from '../types/inlineQueryResult';

/**
 * Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.
 * @memberof methods
 * @async
 * @function answerWebAppQuery
 * @this {Bot} Bot instance
 *  * @param { string } webAppQueryId - Unique identifier for the query to be answered
 *  * @param { InlineQueryResult } result - A JSON-serialized object describing the message to be sent
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.answerWebAppQuery(...);
 */
export async function answerWebAppQuery(
  this: Bot,
  webAppQueryId: string,
  result: InlineQueryResult
): Promise<any> {
  const apiParams = {
    webAppQueryId: webAppQueryId,
    result: result,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('answerWebAppQuery', snakeParams);
  return response;
}
