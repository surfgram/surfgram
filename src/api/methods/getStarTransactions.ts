/**
 * getStarTransactions method implementation for Surfgram Telegram Bot SDK
 * @module methods/getStarTransactions
 * @description Returns the bot&#39;s Telegram Star transactions in chronological order. On success, returns a StarTransactions object.
 * @see {@link https://core.telegram.org/bots/api#getStarTransactions Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Returns the bot&#39;s Telegram Star transactions in chronological order. On success, returns a StarTransactions object.
 * @memberof methods
 * @async
 * @function getStarTransactions
 * @this {Bot} Bot instance
 *  * @param { number } offset? - Number of transactions to skip in the response
 *  * @param { number } limit? - The maximum number of transactions to be retrieved. Values between 1-100 are accepted. Defaults to 100.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.getStarTransactions(...);
 */
export async function getStarTransactions(
  this: Bot,
  offset?: number,
  limit?: number
): Promise<any> {
  const apiParams = {
    offset: offset,
    limit: limit,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('getStarTransactions', snakeParams);
  return response;
}
