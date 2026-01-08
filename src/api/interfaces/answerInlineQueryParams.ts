/**
 * Parameters interface for the answerInlineQuery method
 * @interface AnswerInlineQueryParams
 * @description Use this method to send answers to an inline query. On success, True is returned.No more than 50 results per query are allowed.
 * @see {@link https://core.telegram.org/bots/api#answerInlineQuery Telegram API Documentation}
 */

import { InlineQueryResult } from '../types/inlineQueryResult';
import { InlineQueryResultsButton } from '../types/inlineQueryResultsButton';

export interface AnswerInlineQueryParams {
  /**
   * Unique identifier for the answered query
   * @type { string }
   * @originalType String
   * @required Yes
   */
  inlineQueryId: string;

  /**
   * A JSON-serialized array of results for the inline query
   * @type { InlineQueryResult[] }
   * @originalType Array of InlineQueryResult
   * @required Yes
   */
  results: InlineQueryResult[];

  /**
   * The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.
   * @type { number }
   * @originalType Integer
   * @required No
   */
  cacheTime?: number;

  /**
   * Pass True if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query.
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  isPersonal?: boolean;

  /**
   * Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes.
   * @type { string }
   * @originalType String
   * @required No
   */
  nextOffset?: string;

  /**
   * A JSON-serialized object describing a button to be shown above inline query results
   * @type { InlineQueryResultsButton }
   * @originalType InlineQueryResultsButton
   * @required No
   */
  button?: InlineQueryResultsButton;

}
