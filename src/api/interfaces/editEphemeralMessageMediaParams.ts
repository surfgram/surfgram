/**
 * Parameters interface for the editEphemeralMessageMedia method
 * @interface EditEphemeralMessageMediaParams
 * @description Use this method to edit the media of an ephemeral message. Note that it is not guaranteed that the user will receive the message edit event, especially if they are offline. On success, True is returned.
 * @see {@link https://core.telegram.org/bots/api#editEphemeralMessageMedia Telegram API Documentation}
 */

import { InputMedia } from '../types/inputMedia';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';

export interface EditEphemeralMessageMediaParams {
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
   * A JSON-serialized object for the new media content of the message. A new file can't be uploaded; use a previously uploaded file via its file\_id or specify a URL.
   * @type { InputMedia }
   * @originalType InputMedia
   * @required Yes
   */
  media: InputMedia;

  /**
   * A JSON-serialized object for an inline keyboard
   * @type { InlineKeyboardMarkup }
   * @originalType InlineKeyboardMarkup
   * @required No
   */
  replyMarkup?: InlineKeyboardMarkup;

}
