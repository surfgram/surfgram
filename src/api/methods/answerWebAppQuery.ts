/**
 * answerWebAppQuery method implementation for Surfgram Telegram Bot SDK
 * @module methods/answerWebAppQuery
 * @description Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.
 * @see {@link https://core.telegram.org/bots/api#answerWebAppQuery Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { AnswerWebAppQueryParams } from '../interfaces/answerWebAppQueryParams';
import { InlineQueryResult } from '../types/inlineQueryResult';

/**
 * Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.
 * @memberof methods
 * @async
 * @function answerWebAppQuery
 * @this {Bot} Bot instance
 * @param { AnswerWebAppQueryParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.answerWebAppQuery({
 * // ... params
 * });
 */
export async function answerWebAppQuery(this: Bot, params: AnswerWebAppQueryParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('answerWebAppQuery', snakeParams);
  return response;
}
