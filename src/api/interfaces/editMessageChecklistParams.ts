/**
 * Parameters interface for the editMessageChecklist method
 * @interface EditMessageChecklistParams
 * @description Use this method to edit a checklist on behalf of a connected business account. On success, the edited Message is returned.
 * @see {@link https://core.telegram.org/bots/api#editMessageChecklist Telegram API Documentation}
 */

import { InputChecklist } from "../types/inputChecklist";
import { InlineKeyboardMarkup } from "../types/inlineKeyboardMarkup";

export interface EditMessageChecklistParams {
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
