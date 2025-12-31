/**
 * Parameters interface for the sendVenue method
 * @interface SendVenueParams
 * @description Use this method to send information about a venue. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendVenue Telegram API Documentation}
 */

import { SuggestedPostParameters } from '../types/suggestedPostParameters';
import { ReplyParameters } from '../types/replyParameters';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';
import { ReplyKeyboardMarkup } from '../types/replyKeyboardMarkup';
import { ReplyKeyboardRemove } from '../types/replyKeyboardRemove';
import { ForceReply } from '../types/forceReply';

export interface SendVenueParams {
  /**
   * Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
   * @type { number | string }
   * @originalType Integer or String
   * @required Yes
   */
  chatId: number | string;

  /**
   * Latitude of the venue
   * @type { number }
   * @originalType Float
   * @required Yes
   */
  latitude: number;

  /**
   * Longitude of the venue
   * @type { number }
   * @originalType Float
   * @required Yes
   */
  longitude: number;

  /**
   * Name of the venue
   * @type { string }
   * @originalType String
   * @required Yes
   */
  title: string;

  /**
   * Address of the venue
   * @type { string }
   * @originalType String
   * @required Yes
   */
  address: string;

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
   * Foursquare identifier of the venue
   * @type { string }
   * @originalType String
   * @required No
   */
  foursquareId?: string;

  /**
   * Foursquare type of the venue, if known. \(For example, “arts\_entertainment/default”, “arts\_entertainment/aquarium” or “food/icecream”.\)
   * @type { string }
   * @originalType String
   * @required No
   */
  foursquareType?: string;

  /**
   * Google Places identifier of the venue
   * @type { string }
   * @originalType String
   * @required No
   */
  googlePlaceId?: string;

  /**
   * Google Places type of the venue. \(See supported types.\)
   * @type { string }
   * @originalType String
   * @required No
   */
  googlePlaceType?: string;

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
