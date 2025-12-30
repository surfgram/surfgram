/**
 * readBusinessMessage method implementation for Surfgram Telegram Bot SDK
 * @module methods/readBusinessMessage
 * @description Marks incoming message as read on behalf of a business account. Requires the can\_read\_messages business bot right. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#readBusinessMessage Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Marks incoming message as read on behalf of a business account. Requires the can\_read\_messages business bot right. Returns True on success.
 * @memberof methods
 * @async
 * @function readBusinessMessage
 * @this {Bot} Bot instance
 *  * @param { string } businessConnectionId - Unique identifier of the business connection on behalf of which to read the message
 *  * @param { number } chatId - Unique identifier of the chat in which the message was received. The chat must have been active in the last 24 hours.
 *  * @param { number } messageId - Unique identifier of the message to mark as read
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.readBusinessMessage(...);
 */
export async function readBusinessMessage(
  this: Bot,
  businessConnectionId: string,
  chatId: number,
  messageId: number
): Promise<any> {
  const apiParams = {
    businessConnectionId: businessConnectionId,
    chatId: chatId,
    messageId: messageId,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('readBusinessMessage', snakeParams);
  return response;
}
