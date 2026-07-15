/**
 * Parameters interface for the editEphemeralMessageText method
 * @interface EditEphemeralMessageTextParams
 * @description Use this method to edit an ephemeral text message. Note that it is not guaranteed that the user will receive the message edit event, especially if they are offline. On success, True is returned.
 * @see {@link https://core.telegram.org/bots/api#editEphemeralMessageText Telegram API Documentation}
 */

import { MessageEntity } from '../types/messageEntity';
import { LinkPreviewOptions } from '../types/linkPreviewOptions';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';

export interface EditEphemeralMessageTextParams {
  /**
   * Unique identifier for the target chat or username of the target supergroup in the format @username
   * @type { number | string }
   * @originalType Integer or String
   * @required Yes
   */
  chatId: number | string;

  /**
   * Identifier of the user who received the message
   * @type { number }
   * @originalType Integer
   * @required Yes
   */
  receiverUserId: number;

  /**
   * Identifier of the ephemeral message to edit
   * @type { number }
   * @originalType Integer
   * @required Yes
   */
  ephemeralMessageId: number;

  /**
   * New text of the message, 1-4096 characters after entity parsing
   * @type { string }
   * @originalType String
   * @required Yes
   */
  text: string;

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

  /**
   * Link preview generation options for the message
   * @type { LinkPreviewOptions }
   * @originalType LinkPreviewOptions
   * @required No
   */
  linkPreviewOptions?: LinkPreviewOptions;

  /**
   * A JSON-serialized object for an inline keyboard
   * @type { InlineKeyboardMarkup }
   * @originalType InlineKeyboardMarkup
   * @required No
   */
  replyMarkup?: InlineKeyboardMarkup;

}
