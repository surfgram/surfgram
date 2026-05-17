/**
 * Parameters interface for the editMessageChecklist method
 * @interface EditMessageChecklistParams
 * @description Use this method to edit a checklist on behalf of a connected business account. On success, the edited Message is returned.
 * @see {@link https://core.telegram.org/bots/api#editMessageChecklist Telegram API Documentation}
 */

import { InputChecklist } from '../types/inputChecklist';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';

export interface EditMessageChecklistParams {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   * @type { string }
   * @originalType String
   * @required Yes
   */
  businessConnectionId: string;

  /**
   * Unique identifier for the target chat or username of the target bot in the format @username
   * @type { number | string }
   * @originalType Integer or String
   * @required Yes
   */
  chatId: number | string;

  /**
   * Unique identifier for the target message
   * @type { number }
   * @originalType Integer
   * @required Yes
   */
  messageId: number;

  /**
   * A JSON-serialized object for the new checklist
   * @type { InputChecklist }
   * @originalType InputChecklist
   * @required Yes
   */
  checklist: InputChecklist;

  /**
   * A JSON-serialized object for the new inline keyboard for the message
   * @type { InlineKeyboardMarkup }
   * @originalType InlineKeyboardMarkup
   * @required No
   */
  replyMarkup?: InlineKeyboardMarkup;

}
