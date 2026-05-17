/**
 * Parameters interface for the sendMessageDraft method
 * @interface SendMessageDraftParams
 * @description Use this method to stream a partial message to a user while the message is being generated. Note that the streamed draft is ephemeral and acts as a temporary 30-second preview - once the output is finalized, you must call sendMessage with the complete message to persist it in the user&#39;s chat. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#sendMessageDraft Telegram API Documentation}
 */

import { MessageEntity } from '../types/messageEntity';

export interface SendMessageDraftParams {
  /**
   * Unique identifier for the target private chat
   * @type { number }
   * @originalType Integer
   * @required Yes
   */
  chatId: number;

  /**
   * Unique identifier of the message draft; must be non-zero. Changes of drafts with the same identifier are animated.
   * @type { number }
   * @originalType Integer
   * @required Yes
   */
  draftId: number;

  /**
   * Unique identifier for the target message thread
   * @type { number }
   * @originalType Integer
   * @required No
   */
  messageThreadId?: number;

  /**
   * Text of the message to be sent, 0-4096 characters after entities parsing. Pass an empty text to show a “Thinking…” placeholder.
   * @type { string }
   * @originalType String
   * @required No
   */
  text?: string;

  /**
   * Mode for parsing entities in the message text. See formatting options for more details.
   * @type { string }
   * @originalType String
   * @required No
   */
  parseMode?: string;

  /**
   * A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse\_mode
   * @type { MessageEntity[] }
   * @originalType Array of MessageEntity
   * @required No
   */
  entities?: MessageEntity[];

}
