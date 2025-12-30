/**
 * Parameters interface for the sendChecklist method
 * @interface SendChecklistParams
 * @description Use this method to send a checklist on behalf of a connected business account. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendChecklist Telegram API Documentation}
 */

import { InputChecklist } from '../types/inputChecklist';
import { ReplyParameters } from '../types/replyParameters';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';

export interface SendChecklistParams {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   * @type { string }
   * @originalType String
   * @required Yes
   */
  businessConnectionId: string;

  /**
   * Unique identifier for the target chat
   * @type { number }
   * @originalType Integer
   * @required Yes
   */
  chatId: number;

  /**
   * A JSON-serialized object for the checklist to send
   * @type { InputChecklist }
   * @originalType InputChecklist
   * @required Yes
   */
  checklist: InputChecklist;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  disableNotification?: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  protectContent?: boolean;

  /**
   * Unique identifier of the message effect to be added to the message
   * @type { string }
   * @originalType String
   * @required No
   */
  messageEffectId?: string;

  /**
   * A JSON-serialized object for description of the message to reply to
   * @type { ReplyParameters }
   * @originalType ReplyParameters
   * @required No
   */
  replyParameters?: ReplyParameters;

  /**
   * A JSON-serialized object for an inline keyboard
   * @type { InlineKeyboardMarkup }
   * @originalType InlineKeyboardMarkup
   * @required No
   */
  replyMarkup?: InlineKeyboardMarkup;
}
