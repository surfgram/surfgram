/**
 * Parameters interface for the getAvailableGifts method
 * @interface GetAvailableGiftsParams
 * @description Returns the list of gifts that can be sent by the bot to users and channel chats. Requires no parameters. Returns a Gifts object.
 * @see {@link https://core.telegram.org/bots/api#getAvailableGifts Telegram API Documentation}
 */

import { MessageEntity } from '../types/messageEntity';

export interface GetAvailableGiftsParams {
  /**
   * Identifier of the gift
   * @type { string }
   * @originalType String
   * @required Yes
   */
  giftId: string;

  /**
   * Required if chat\_id is not specified. Unique identifier of the target user who will receive the gift.
   * @type { number }
   * @originalType Integer
   * @required No
   */
  userId?: number;

  /**
   * Required if user\_id is not specified. Unique identifier for the chat or username of the channel \(in the format @channelusername\) that will receive the gift.
   * @type { number | string }
   * @originalType Integer or String
   * @required No
   */
  chatId?: number | string;

  /**
   * Pass True to pay for the gift upgrade from the bot's balance, thereby making the upgrade free for the receiver
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  payForUpgrade?: boolean;

  /**
   * Text that will be shown along with the gift; 0-128 characters
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
