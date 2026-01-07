/**
 * Parameters interface for the getBusinessAccountGifts method
 * @interface GetBusinessAccountGiftsParams
 * @description Returns the gifts received and owned by a managed business account. Requires the can\_view\_gifts\_and\_stars business bot right. Returns OwnedGifts on success.
 * @see {@link https://core.telegram.org/bots/api#getBusinessAccountGifts Telegram API Documentation}
 */


export interface GetBusinessAccountGiftsParams {
  /**
   * Unique identifier of the business connection
   * @type { string }
   * @originalType String
   * @required Yes
   */
  businessConnectionId: string;

  /**
   * Pass True to exclude gifts that aren't saved to the account's profile page
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  excludeUnsaved?: boolean;

  /**
   * Pass True to exclude gifts that are saved to the account's profile page
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
   * Pass True to exclude unique gifts
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  excludeUnique?: boolean;

  /**
   * Pass True to exclude gifts that were assigned from the TON blockchain and can't be resold or transferred in Telegram
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  excludeFromBlockchain?: boolean;

  /**
   * Pass True to sort results by gift price instead of send date. Sorting is applied before pagination.
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  sortByPrice?: boolean;

  /**
   * Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results
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
