/**
 * Parameters interface for the savePreparedInlineMessage method
 * @interface SavePreparedInlineMessageParams
 * @description Stores a message that can be sent by a user of a Mini App. Returns a PreparedInlineMessage object.
 * @see {@link https://core.telegram.org/bots/api#savePreparedInlineMessage Telegram API Documentation}
 */

import { InlineQueryResult } from '../types/inlineQueryResult';

export interface SavePreparedInlineMessageParams {
  /**
   * Unique identifier of the target user that can use the prepared message
   * @type { number }
   * @originalType Integer
   * @required Yes
   */
  userId: number;

  /**
   * A JSON-serialized object describing the message to be sent
   * @type { InlineQueryResult }
   * @originalType InlineQueryResult
   * @required Yes
   */
  result: InlineQueryResult;

  /**
   * Pass True if the message can be sent to private chats with users
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  allowUserChats?: boolean;

  /**
   * Pass True if the message can be sent to private chats with bots
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  allowBotChats?: boolean;

  /**
   * Pass True if the message can be sent to group and supergroup chats
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  allowGroupChats?: boolean;

  /**
   * Pass True if the message can be sent to channel chats
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  allowChannelChats?: boolean;
}
