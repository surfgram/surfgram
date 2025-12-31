/**
 * Parameters interface for the sendVideo method
 * @interface SendVideoParams
 * @description Use this method to send video files, Telegram clients support MPEG4 videos \(other formats may be sent as Document\). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
 * @see {@link https://core.telegram.org/bots/api#sendVideo Telegram API Documentation}
 */

import { InputFile } from "../types/inputFile";
import { MessageEntity } from "../types/messageEntity";
import { SuggestedPostParameters } from "../types/suggestedPostParameters";
import { ReplyParameters } from "../types/replyParameters";
import { InlineKeyboardMarkup } from "../types/inlineKeyboardMarkup";
import { ReplyKeyboardMarkup } from "../types/replyKeyboardMarkup";
import { ReplyKeyboardRemove } from "../types/replyKeyboardRemove";
import { ForceReply } from "../types/forceReply";

export interface SendVideoParams {
	/**
	 * Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
	 * @type { number | string }
	 * @originalType Integer or String
	 * @required Yes
	 */
	chatId: number | string;

	/**
	 * Video to send. Pass a file\_id as String to send a video that exists on the Telegram servers \(recommended\), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. More information on Sending Files »
	 * @type { InputFile | string }
	 * @originalType InputFile or String
	 * @required Yes
	 */
	video: InputFile | string;

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
	 * Duration of sent video in seconds
	 * @type { number }
	 * @originalType Integer
	 * @required No
	 */
	duration?: number;

	/**
	 * Video width
	 * @type { number }
	 * @originalType Integer
	 * @required No
	 */
	width?: number;

	/**
	 * Video height
	 * @type { number }
	 * @originalType Integer
	 * @required No
	 */
	height?: number;

	/**
	 * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file\_attach\_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file\_attach\_name&gt;. More information on Sending Files »
	 * @type { InputFile | string }
	 * @originalType InputFile or String
	 * @required No
	 */
	thumbnail?: InputFile | string;

	/**
	 * Cover for the video in the message. Pass a file\_id to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file\_attach\_name&gt;” to upload a new one using multipart/form-data under &lt;file\_attach\_name&gt; name. More information on Sending Files »
	 * @type { InputFile | string }
	 * @originalType InputFile or String
	 * @required No
	 */
	cover?: InputFile | string;

	/**
	 * Start timestamp for the video in the message
	 * @type { number }
	 * @originalType Integer
	 * @required No
	 */
	startTimestamp?: number;

	/**
	 * Video caption \(may also be used when resending videos by file\_id\), 0-1024 characters after entities parsing
	 * @type { string }
	 * @originalType String
	 * @required No
	 */
	caption?: string;

	/**
	 * Mode for parsing entities in the video caption. See formatting options for more details.
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
	 * Pass True if the video needs to be covered with a spoiler animation
	 * @type { boolean }
	 * @originalType Boolean
	 * @required No
	 */
	hasSpoiler?: boolean;

	/**
	 * Pass True if the uploaded video is suitable for streaming
	 * @type { boolean }
	 * @originalType Boolean
	 * @required No
	 */
	supportsStreaming?: boolean;

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
