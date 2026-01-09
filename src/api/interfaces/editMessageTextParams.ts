/**
 * Parameters interface for the editMessageText method
 * @interface EditMessageTextParams
 * @description Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
 * @see {@link https://core.telegram.org/bots/api#editMessageText Telegram API Documentation}
 */

import { MessageEntity } from '../types/messageEntity';
import { LinkPreviewOptions } from '../types/linkPreviewOptions';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';

export interface EditMessageTextParams {
  /**
   * New text of the message, 1-4096 characters after entities parsing
   * @type { string }
   * @originalType String
   * @required Yes
   */
  text: string;

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
   * A JSON-serialized object for an inline keyboard.
   * @type { InlineKeyboardMarkup }
   * @originalType InlineKeyboardMarkup
   * @required No
   */
  replyMarkup?: InlineKeyboardMarkup;

}
