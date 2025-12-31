/**
 * Parameters interface for the sendPaidMedia method
 * @interface SendPaidMediaParams
 * @description Use this method to send paid media. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendPaidMedia Telegram API Documentation}
 */

import { InputPaidMedia } from "../types/inputPaidMedia";
import { MessageEntity } from "../types/messageEntity";
import { SuggestedPostParameters } from "../types/suggestedPostParameters";
import { ReplyParameters } from "../types/replyParameters";
import { InlineKeyboardMarkup } from "../types/inlineKeyboardMarkup";
import { ReplyKeyboardMarkup } from "../types/replyKeyboardMarkup";
import { ReplyKeyboardRemove } from "../types/replyKeyboardRemove";
import { ForceReply } from "../types/forceReply";

export interface SendPaidMediaParams {
	/**
	 * Unique identifier for the target chat or username of the target channel \(in the format @channelusername\). If the chat is a channel, all Telegram Star proceeds from this media will be credited to the chat's balance. Otherwise, they will be credited to the bot's balance.
	 * @type { number | string }
	 * @originalType Integer or String
	 * @required Yes
	 */
	chatId: number | string;

	/**
	 * The number of Telegram Stars that must be paid to buy access to the media; 1-25000
	 * @type { number }
	 * @originalType Integer
	 * @required Yes
	 */
	starCount: number;

	/**
	 * A JSON-serialized array describing the media to be sent; up to 10 items
	 * @type { InputPaidMedia[] }
	 * @originalType Array of InputPaidMedia
	 * @required Yes
	 */
	media: InputPaidMedia[];

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
	 * Bot-defined paid media payload, 0-128 bytes. This will not be displayed to the user, use it for your internal processes.
	 * @type { string }
	 * @originalType String
	 * @required No
	 */
	payload?: string;

	/**
	 * Media caption, 0-1024 characters after entities parsing
	 * @type { string }
	 * @originalType String
	 * @required No
	 */
	caption?: string;

	/**
	 * Mode for parsing entities in the media caption. See formatting options for more details.
	 * @type { string }
	 * @originalType String
	 * @required No
	 */
	parseMode?: string;

	/**
	 * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse\_mode
	 * @type { MessageEntity[] }
	 * @originalType Array of MessageEntity
	 * @required No
	 */
	captionEntities?: MessageEntity[];

	/**
	 * Pass True, if the caption must be shown above the message media
	 * @type { boolean }
	 * @originalType Boolean
	 * @required No
	 */
	showCaptionAboveMedia?: boolean;

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
