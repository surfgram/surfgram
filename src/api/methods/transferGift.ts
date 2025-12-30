/**
 * transferGift method implementation for Surfgram Telegram Bot SDK
 * @module methods/transferGift
 * @description Transfers an owned unique gift to another user. Requires the can\_transfer\_and\_upgrade\_gifts business bot right. Requires can\_transfer\_stars business bot right if the transfer is paid. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#transferGift Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Transfers an owned unique gift to another user. Requires the can\_transfer\_and\_upgrade\_gifts business bot right. Requires can\_transfer\_stars business bot right if the transfer is paid. Returns True on success.
 * @memberof methods
 * @async
 * @function transferGift
 * @this {Bot} Bot instance
 *  * @param { string } businessConnectionId - Unique identifier of the business connection
 *  * @param { string } ownedGiftId - Unique identifier of the regular gift that should be transferred
 *  * @param { number } newOwnerChatId - Unique identifier of the chat which will own the gift. The chat must be active in the last 24 hours.
 *  * @param { number } starCount? - The amount of Telegram Stars that will be paid for the transfer from the business account balance. If positive, then the can\_transfer\_stars business bot right is required.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.transferGift(...);
 */
export async function transferGift(
  this: Bot,
  businessConnectionId: string,
  ownedGiftId: string,
  newOwnerChatId: number,
  starCount?: number
): Promise<any> {
  const apiParams = {
    businessConnectionId: businessConnectionId,
    ownedGiftId: ownedGiftId,
    newOwnerChatId: newOwnerChatId,
    starCount: starCount,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('transferGift', snakeParams);
  return response;
}
