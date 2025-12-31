/**
 * Parameters interface for the sendMessageDraft method
 * @interface SendMessageDraftParams
 * @description Use this method to stream a partial message to a user while the message is being generated; supported only for bots with forum topic mode enabled. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#sendMessageDraft Telegram API Documentation}
 */

import { MessageEntity } from "../types/messageEntity";

export interface SendMessageDraftParams {
	/**
	 * Unique identifier for the target private chat
	 * @type { number }
	 * @originalType Integer
	 * @required Yes
	 */
	chatId: number;

	/**
	 * Unique identifier of the message draft; must be non-zero. Changes of drafts with the same identifier are animated
	 * @type { number }
	 * @originalType Integer
	 * @required Yes
	 */
	draftId: number;

	/**
	 * Text of the message to be sent, 1-4096 characters after entities parsing
	 * @type { string }
	 * @originalType String
	 * @required Yes
	 */
	text: string;

	/**
	 * Unique identifier for the target message thread
	 * @type { number }
	 * @originalType Integer
	 * @required No
	 */
	messageThreadId?: number;

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
