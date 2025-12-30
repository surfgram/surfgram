/**
 * Parameters interface for the answerWebAppQuery method
 * @interface AnswerWebAppQueryParams
 * @description Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.
 * @see {@link https://core.telegram.org/bots/api#answerWebAppQuery Telegram API Documentation}
 */

import { InlineQueryResult } from '../types/inlineQueryResult';

export interface AnswerWebAppQueryParams {
  /**
   * Unique identifier for the query to be answered
   * @type { string }
   * @originalType String
   * @required Yes
   */
  webAppQueryId: string;

  /**
   * A JSON-serialized object describing the message to be sent
   * @type { InlineQueryResult }
   * @originalType InlineQueryResult
   * @required Yes
   */
  result: InlineQueryResult;
}
