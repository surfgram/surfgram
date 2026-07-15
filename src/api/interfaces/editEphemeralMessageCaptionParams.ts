/**
 * Parameters interface for the editEphemeralMessageCaption method
 * @interface EditEphemeralMessageCaptionParams
 * @description Use this method to edit the caption of an ephemeral message. Note that it is not guaranteed that the user will receive the message edit event, especially if they are offline. On success, True is returned.
 * @see {@link https://core.telegram.org/bots/api#editEphemeralMessageCaption Telegram API Documentation}
 */

import { MessageEntity } from '../types/messageEntity';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';

export interface EditEphemeralMessageCaptionParams {
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
   * New caption of the message, 0-1024 characters after entities parsing
   * @type { string }
   * @originalType String
   * @required No
   */
  caption?: string;

  /**
   * Mode for parsing entities in the message caption. See formatting options for more details.
   * @type { string }
   * @originalType String
   * @required No
   */
  parseMode?: string;

  /**
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse\_mode
   * @type { MessageEntity[] }
   * @originalType Array of MessageEntity
   * @required No
   */
  captionEntities?: MessageEntity[];

  /**
   * A JSON-serialized object for an inline keyboard
   * @type { InlineKeyboardMarkup }
   * @originalType InlineKeyboardMarkup
   * @required No
   */
  replyMarkup?: InlineKeyboardMarkup;

}
