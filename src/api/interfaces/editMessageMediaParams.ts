/**
 * Parameters interface for the editMessageMedia method
 * @interface EditMessageMediaParams
 * @description Use this method to edit animation, audio, document, photo, or video messages, or to add media to text messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can&#39;t be uploaded; use a previously uploaded file via its file\_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
 * @see {@link https://core.telegram.org/bots/api#editMessageMedia Telegram API Documentation}
 */

import { InputMedia } from '../types/inputMedia';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';

export interface EditMessageMediaParams {
  /**
   * A JSON-serialized object for a new media content of the message
   * @type { InputMedia }
   * @originalType InputMedia
   * @required Yes
   */
  media: InputMedia;

  /**
   * Unique identifier of the business connection on behalf of which the message to be edited was sent
   * @type { string }
   * @originalType String
   * @required No
   */
  businessConnectionId?: string;

  /**
   * Required if inline\_message\_id is not specified. Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
   * @type { number | string }
   * @originalType Integer or String
   * @required No
   */
  chatId?: number | string;

  /**
   * Required if inline\_message\_id is not specified. Identifier of the message to edit
   * @type { number }
   * @originalType Integer
   * @required No
   */
  messageId?: number;

  /**
   * Required if chat\_id and message\_id are not specified. Identifier of the inline message
   * @type { string }
   * @originalType String
   * @required No
   */
  inlineMessageId?: string;

  /**
   * A JSON-serialized object for a new inline keyboard.
   * @type { InlineKeyboardMarkup }
   * @originalType InlineKeyboardMarkup
   * @required No
   */
  replyMarkup?: InlineKeyboardMarkup;

}
