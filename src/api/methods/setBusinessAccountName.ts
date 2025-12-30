/**
 * setBusinessAccountName method implementation for Surfgram Telegram Bot SDK
 * @module methods/setBusinessAccountName
 * @description Changes the first and last name of a managed business account. Requires the can\_change\_name business bot right. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setBusinessAccountName Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Changes the first and last name of a managed business account. Requires the can\_change\_name business bot right. Returns True on success.
 * @memberof methods
 * @async
 * @function setBusinessAccountName
 * @this {Bot} Bot instance
 *  * @param { string } businessConnectionId - Unique identifier of the business connection
 *  * @param { string } firstName - The new value of the first name for the business account; 1-64 characters
 *  * @param { string } lastName? - The new value of the last name for the business account; 0-64 characters
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setBusinessAccountName(...);
 */
export async function setBusinessAccountName(
  this: Bot,
  businessConnectionId: string,
  firstName: string,
  lastName?: string
): Promise<any> {
  const apiParams = {
    businessConnectionId: businessConnectionId,
    firstName: firstName,
    lastName: lastName,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('setBusinessAccountName', snakeParams);
  return response;
}
