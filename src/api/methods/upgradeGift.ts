/**
 * upgradeGift method implementation for Surfgram Telegram Bot SDK
 * @module methods/upgradeGift
 * @description Upgrades a given regular gift to a unique gift. Requires the can\_transfer\_and\_upgrade\_gifts business bot right. Additionally requires the can\_transfer\_stars business bot right if the upgrade is paid. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#upgradeGift Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Upgrades a given regular gift to a unique gift. Requires the can\_transfer\_and\_upgrade\_gifts business bot right. Additionally requires the can\_transfer\_stars business bot right if the upgrade is paid. Returns True on success.
 * @memberof methods
 * @async
 * @function upgradeGift
 * @this {Bot} Bot instance
 *  * @param { string } businessConnectionId - Unique identifier of the business connection
 *  * @param { string } ownedGiftId - Unique identifier of the regular gift that should be upgraded to a unique one
 *  * @param { boolean } keepOriginalDetails? - Pass True to keep the original gift text, sender and receiver in the upgraded gift
 *  * @param { number } starCount? - The amount of Telegram Stars that will be paid for the upgrade from the business account balance. If gift.prepaid\_upgrade\_star\_count &gt; 0, then pass 0, otherwise, the can\_transfer\_stars business bot right is required and gift.upgrade\_star\_count must be passed.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.upgradeGift(...);
 */
export async function upgradeGift(this: Bot, businessConnectionId: string, ownedGiftId: string, keepOriginalDetails?: boolean, starCount?: number): Promise<any> {
  const apiParams = {
    businessConnectionId: businessConnectionId,
    ownedGiftId: ownedGiftId,
    keepOriginalDetails: keepOriginalDetails,
    starCount: starCount,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('upgradeGift', snakeParams);
  return response;
}
