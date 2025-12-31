/**
 * Parameters interface for the getChatGifts method
 * @interface GetChatGiftsParams
 * @description Returns the gifts owned by a chat. Returns OwnedGifts on success.
 * @see {@link https://core.telegram.org/bots/api#getChatGifts Telegram API Documentation}
 */


export interface GetChatGiftsParams {
  /**
   * Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
   * @type { number | string }
   * @originalType Integer or String
   * @required Yes
   */
  chatId: number | string;

  /**
   * Pass True to exclude gifts that aren't saved to the chat's profile page. Always True, unless the bot has the can\_post\_messages administrator right in the channel.
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  excludeUnsaved?: boolean;

  /**
   * Pass True to exclude gifts that are saved to the chat's profile page. Always False, unless the bot has the can\_post\_messages administrator right in the channel.
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  excludeSaved?: boolean;

  /**
   * Pass True to exclude gifts that can be purchased an unlimited number of times
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  excludeUnlimited?: boolean;

  /**
   * Pass True to exclude gifts that can be purchased a limited number of times and can be upgraded to unique
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  excludeLimitedUpgradable?: boolean;

  /**
   * Pass True to exclude gifts that can be purchased a limited number of times and can't be upgraded to unique
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  excludeLimitedNonUpgradable?: boolean;

  /**
   * Pass True to exclude gifts that were assigned from the TON blockchain and can't be resold or transferred in Telegram
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  excludeFromBlockchain?: boolean;

  /**
   * Pass True to exclude unique gifts
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  excludeUnique?: boolean;

  /**
   * Pass True to sort results by gift price instead of send date. Sorting is applied before pagination.
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  sortByPrice?: boolean;

  /**
   * Offset of the first entry to return as received from the previous request; use an empty string to get the first chunk of results
   * @type { string }
   * @originalType String
   * @required No
   */
  offset?: string;

  /**
   * The maximum number of gifts to be returned; 1-100. Defaults to 100
   * @type { number }
   * @originalType Integer
   * @required No
   */
  limit?: number;

}
