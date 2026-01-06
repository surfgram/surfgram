/**
 * Parameters interface for the editMessageLiveLocation method
 * @interface EditMessageLiveLocationParams
 * @description Use this method to edit live location messages. A location can be edited until its live\_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
 * @see {@link https://core.telegram.org/bots/api#editMessageLiveLocation Telegram API Documentation}
 */

import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';

export interface EditMessageLiveLocationParams {
  /**
   * Latitude of new location
   * @type { number }
   * @originalType Float
   * @required Yes
   */
  latitude: number;

  /**
   * Longitude of new location
   * @type { number }
   * @originalType Float
   * @required Yes
   */
  longitude: number;

  /**
   * Unique identifier of the business connection on behalf of which the message to be edited was sent
   * @type { string }
   * @originalType String
   * @required No
   */
  businessConnectionId?: string;

  /**
   * Required if inline\_message\_id is not specified. Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
   * @type { number | string }
   * @originalType Integer or String
   * @required No
   */
  chatId?: number | string;

  /**
   * Required if inline\_message\_id is not specified. Identifier of the message to edit
   * @type { number }
   * @originalType Integer
   * @required No
   */
  messageId?: number;

  /**
   * Required if chat\_id and message\_id are not specified. Identifier of the inline message
   * @type { string }
   * @originalType String
   * @required No
   */
  inlineMessageId?: string;

  /**
   * New period in seconds during which the location can be updated, starting from the message send date. If 0x7FFFFFFF is specified, then the location can be updated forever. Otherwise, the new value must not exceed the current live\_period by more than a day, and the live location expiration date must remain within the next 90 days. If not specified, then live\_period remains unchanged
   * @type { number }
   * @originalType Integer
   * @required No
   */
  livePeriod?: number;

  /**
   * The radius of uncertainty for the location, measured in meters; 0-1500
   * @type { number }
   * @originalType Float
   * @required No
   */
  horizontalAccuracy?: number;

  /**
   * Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
   * @type { number }
   * @originalType Integer
   * @required No
   */
  heading?: number;

  /**
   * The maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
   * @type { number }
   * @originalType Integer
   * @required No
   */
  proximityAlertRadius?: number;

  /**
   * A JSON-serialized object for a new inline keyboard.
   * @type { InlineKeyboardMarkup }
   * @originalType InlineKeyboardMarkup
   * @required No
   */
  replyMarkup?: InlineKeyboardMarkup;

}
