/**
 * transferBusinessAccountStars method implementation for Surfgram Telegram Bot SDK
 * @module methods/transferBusinessAccountStars
 * @description Transfers Telegram Stars from the business account balance to the bot&#39;s balance. Requires the can\_transfer\_stars business bot right. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#transferBusinessAccountStars Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Transfers Telegram Stars from the business account balance to the bot&#39;s balance. Requires the can\_transfer\_stars business bot right. Returns True on success.
 * @memberof methods
 * @async
 * @function transferBusinessAccountStars
 * @this {Bot} Bot instance
 *  * @param { string } businessConnectionId - Unique identifier of the business connection
 *  * @param { number } starCount - Number of Telegram Stars to transfer; 1-10000
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.transferBusinessAccountStars(...);
 */
export async function transferBusinessAccountStars(
  this: Bot,
  businessConnectionId: string,
  starCount: number
): Promise<any> {
  const apiParams = {
    businessConnectionId: businessConnectionId,
    starCount: starCount,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('transferBusinessAccountStars', snakeParams);
  return response;
}
