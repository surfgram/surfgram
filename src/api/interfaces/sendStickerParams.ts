/**
 * Parameters interface for the sendSticker method
 * @interface SendStickerParams
 * @description Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendSticker Telegram API Documentation}
 */

import { InputFile } from '../types/inputFile';
import { SuggestedPostParameters } from '../types/suggestedPostParameters';
import { ReplyParameters } from '../types/replyParameters';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';
import { ReplyKeyboardMarkup } from '../types/replyKeyboardMarkup';
import { ReplyKeyboardRemove } from '../types/replyKeyboardRemove';
import { ForceReply } from '../types/forceReply';

export interface SendStickerParams {
  /**
   * Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
   * @type { number | string }
   * @originalType Integer or String
   * @required Yes
   */
  chatId: number | string;

  /**
   * Sticker to send. Pass a file\_id as String to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL as a String for Telegram to get a .WEBP sticker from the Internet, or upload a new .WEBP, .TGS, or .WEBM sticker using multipart/form-data. More information on Sending Files ». Video and animated stickers can't be sent via an HTTP URL.
   * @type { InputFile | string }
   * @originalType InputFile or String
   * @required Yes
   */
  sticker: InputFile | string;

  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   * @type { string }
   * @originalType String
   * @required No
   */
  businessConnectionId?: string;

  /**
   * Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only
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
   * Emoji associated with the sticker; only for just uploaded stickers
   * @type { string }
   * @originalType String
   * @required No
   */
  emoji?: string;

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
  replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}
