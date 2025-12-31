/**
 * Parameters interface for the giftPremiumSubscription method
 * @interface GiftPremiumSubscriptionParams
 * @description Gifts a Telegram Premium subscription to the given user. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#giftPremiumSubscription Telegram API Documentation}
 */

import { MessageEntity } from '../types/messageEntity';

export interface GiftPremiumSubscriptionParams {
  /**
   * Unique identifier of the target user who will receive a Telegram Premium subscription
   * @type { number }
   * @originalType Integer
   * @required Yes
   */
  userId: number;

  /**
   * Number of months the Telegram Premium subscription will be active for the user; must be one of 3, 6, or 12
   * @type { number }
   * @originalType Integer
   * @required Yes
   */
  monthCount: number;

  /**
   * Number of Telegram Stars to pay for the Telegram Premium subscription; must be 1000 for 3 months, 1500 for 6 months, and 2500 for 12 months
   * @type { number }
   * @originalType Integer
   * @required Yes
   */
  starCount: number;

  /**
   * Text that will be shown along with the service message about the subscription; 0-128 characters
   * @type { string }
   * @originalType String
   * @required No
   */
  text?: string;

  /**
   * Mode for parsing entities in the text. See formatting options for more details. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom\_emoji” are ignored.
   * @type { string }
   * @originalType String
   * @required No
   */
  textParseMode?: string;

  /**
   * A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of text\_parse\_mode. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom\_emoji” are ignored.
   * @type { MessageEntity[] }
   * @originalType Array of MessageEntity
   * @required No
   */
  textEntities?: MessageEntity[];
}
