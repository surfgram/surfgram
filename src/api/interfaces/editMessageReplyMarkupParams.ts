/**
 * Parameters interface for the editMessageReplyMarkup method
 * @interface EditMessageReplyMarkupParams
 * @description Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
 * @see {@link https://core.telegram.org/bots/api#editMessageReplyMarkup Telegram API Documentation}
 */

import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';

export interface EditMessageReplyMarkupParams {
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
   * A JSON-serialized object for an inline keyboard.
   * @type { InlineKeyboardMarkup }
   * @originalType InlineKeyboardMarkup
   * @required No
   */
  replyMarkup?: InlineKeyboardMarkup;

}
