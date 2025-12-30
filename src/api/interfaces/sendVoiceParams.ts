/**
 * Parameters interface for the sendVoice method
 * @interface SendVoiceParams
 * @description Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS, or in .MP3 format, or in .M4A format \(other formats may be sent as Audio or Document\). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.
 * @see {@link https://core.telegram.org/bots/api#sendVoice Telegram API Documentation}
 */

import { InputFile } from '../types/inputFile';
import { MessageEntity } from '../types/messageEntity';
import { SuggestedPostParameters } from '../types/suggestedPostParameters';
import { ReplyParameters } from '../types/replyParameters';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';
import { ReplyKeyboardMarkup } from '../types/replyKeyboardMarkup';
import { ReplyKeyboardRemove } from '../types/replyKeyboardRemove';
import { ForceReply } from '../types/forceReply';

export interface SendVoiceParams {
  /**
   * Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
   * @type { number | string }
   * @originalType Integer or String
   * @required Yes
   */
  chatId: number | string;

  /**
   * Audio file to send. Pass a file\_id as String to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files »
   * @type { InputFile | string }
   * @originalType InputFile or String
   * @required Yes
   */
  voice: InputFile | string;

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
   * Voice message caption, 0-1024 characters after entities parsing
   * @type { string }
   * @originalType String
   * @required No
   */
  caption?: string;

  /**
   * Mode for parsing entities in the voice message caption. See formatting options for more details.
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
   * Duration of the voice message in seconds
   * @type { number }
   * @originalType Integer
   * @required No
   */
  duration?: number;

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
