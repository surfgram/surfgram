/**
 * answerInlineQuery method implementation for Surfgram Telegram Bot SDK
 * @module methods/answerInlineQuery
 * @description Use this method to send answers to an inline query. On success, True is returned.No more than 50 results per query are allowed.
 * @see {@link https://core.telegram.org/bots/api#answerInlineQuery Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { AnswerInlineQueryParams } from '../interfaces/answerInlineQueryParams';
import { InlineQueryResult } from '../types/inlineQueryResult';
import { InlineQueryResultsButton } from '../types/inlineQueryResultsButton';

/**
 * Use this method to send answers to an inline query. On success, True is returned.No more than 50 results per query are allowed.
 * @memberof methods
 * @async
 * @function answerInlineQuery
 * @this {Bot} Bot instance
 * @param { AnswerInlineQueryParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.answerInlineQuery({
 * // ... params
 * });
 */
export async function answerInlineQuery(this: Bot, params: AnswerInlineQueryParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('answerInlineQuery', snakeParams);
  return response;
}
