/**
 * setPassportDataErrors method implementation for Surfgram Telegram Bot SDK
 * @module methods/setPassportDataErrors
 * @description Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed \(the contents of the field for which you returned the error must change\). Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setPassportDataErrors Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { PassportElementError } from '../types/passportElementError';

/**
 * Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed \(the contents of the field for which you returned the error must change\). Returns True on success.
 * @memberof methods
 * @async
 * @function setPassportDataErrors
 * @this {Bot} Bot instance
 *  * @param { number } userId - User identifier
 *  * @param { PassportElementError[] } errors - A JSON-serialized array describing the errors
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setPassportDataErrors(...);
 */
export async function setPassportDataErrors(
  this: Bot,
  userId: number,
  errors: PassportElementError[]
): Promise<any> {
  const apiParams = {
    userId: userId,
    errors: errors,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('setPassportDataErrors', snakeParams);
  return response;
}
