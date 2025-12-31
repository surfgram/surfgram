/**
 * editUserStarSubscription method implementation for Surfgram Telegram Bot SDK
 * @module methods/editUserStarSubscription
 * @description Allows the bot to cancel or re-enable extension of a subscription paid in Telegram Stars. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#editUserStarSubscription Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Allows the bot to cancel or re-enable extension of a subscription paid in Telegram Stars. Returns True on success.
 * @memberof methods
 * @async
 * @function editUserStarSubscription
 * @this {Bot} Bot instance
 *  * @param { number } userId - Identifier of the user whose subscription will be edited
 *  * @param { string } telegramPaymentChargeId - Telegram payment identifier for the subscription
 *  * @param { boolean } isCanceled - Pass True to cancel extension of the user subscription; the subscription must be active up to the end of the current subscription period. Pass False to allow the user to re-enable a subscription that was previously canceled by the bot.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.editUserStarSubscription(...);
 */
export async function editUserStarSubscription(
  this: Bot,
  userId: number,
  telegramPaymentChargeId: string,
  isCanceled: boolean
): Promise<any> {
  const apiParams = {
    userId: userId,
    telegramPaymentChargeId: telegramPaymentChargeId,
    isCanceled: isCanceled,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('editUserStarSubscription', snakeParams);
  return response;
}
