/**
 * Parameters interface for the sendGame method
 * @interface SendGameParams
 * @description Use this method to send a game. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendGame Telegram API Documentation}
 */

import { ReplyParameters } from "../types/replyParameters";
import { InlineKeyboardMarkup } from "../types/inlineKeyboardMarkup";

export interface SendGameParams {
	/**
	 * Unique identifier for the target chat. Games can't be sent to channel direct messages chats and channel chats.
	 * @type { number }
	 * @originalType Integer
	 * @required Yes
	 */
	chatId: number;

	/**
	 * Short name of the game, serves as the unique identifier for the game. Set up your games via @BotFather.
	 * @type { string }
	 * @originalType String
	 * @required Yes
	 */
	gameShortName: string;

	/**
	 * Unique identifier of the business connection on behalf of which the message will be sent
	 * @type { string }
	 * @originalType String
	 * @required No
	 */
	businessConnectionId?: string;

	/**
	 * Unique identifier for the target message thread \(topic\) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only
	 * @type { number }
	 * @originalType Integer
	 * @required No
	 */
	messageThreadId?: number;

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
	 * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
	 * @type { boolean }
	 * @originalType Boolean
	 * @required No
	 */
	allowPaidBroadcast?: boolean;

	/**
	 * Unique identifier of the message effect to be added to the message; for private chats only
	 * @type { string }
	 * @originalType String
	 * @required No
	 */
	messageEffectId?: string;

	/**
	 * Description of the message to reply to
	 * @type { ReplyParameters }
	 * @originalType ReplyParameters
	 * @required No
	 */
	replyParameters?: ReplyParameters;

	/**
	 * A JSON-serialized object for an inline keyboard. If empty, one 'Play game\_title' button will be shown. If not empty, the first button must launch the game.
	 * @type { InlineKeyboardMarkup }
	 * @originalType InlineKeyboardMarkup
	 * @required No
	 */
	replyMarkup?: InlineKeyboardMarkup;
}
