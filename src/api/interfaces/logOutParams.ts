/**
 * Parameters interface for the logOut method
 * @interface LogOutParams
 * @description Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns True on success. Requires no parameters.
 * @see {@link https://core.telegram.org/bots/api#logOut Telegram API Documentation}
 */

import { MessageEntity } from "../types/messageEntity";
import { LinkPreviewOptions } from "../types/linkPreviewOptions";
import { SuggestedPostParameters } from "../types/suggestedPostParameters";
import { ReplyParameters } from "../types/replyParameters";
import { InlineKeyboardMarkup } from "../types/inlineKeyboardMarkup";
import { ReplyKeyboardMarkup } from "../types/replyKeyboardMarkup";
import { ReplyKeyboardRemove } from "../types/replyKeyboardRemove";
import { ForceReply } from "../types/forceReply";

export interface LogOutParams {
	/**
	 * Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
	 * @type { number | string }
	 * @originalType Integer or String
	 * @required Yes
	 */
	chatId: number | string;

	/**
	 * Text of the message to be sent, 1-4096 characters after entities parsing
	 * @type { string }
	 * @originalType String
	 * @required Yes
	 */
	text: string;

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
	 * Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat
	 * @type { number }
	 * @originalType Integer
	 * @required No
	 */
	directMessagesTopicId?: number;

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
	 * A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.
	 * @type { SuggestedPostParameters }
	 * @originalType SuggestedPostParameters
	 * @required No
	 */
	suggestedPostParameters?: SuggestedPostParameters;

	/**
	 * Description of the message to reply to
	 * @type { ReplyParameters }
	 * @originalType ReplyParameters
	 * @required No
	 */
	replyParameters?: ReplyParameters;

	/**
	 * Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
	 * @type { InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply }
	 * @originalType InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply
	 * @required No
	 */
	replyMarkup?:
		| InlineKeyboardMarkup
		| ReplyKeyboardMarkup
		| ReplyKeyboardRemove
		| ForceReply;
}
