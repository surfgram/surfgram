/**
 * deleteBusinessMessages method implementation for Surfgram Telegram Bot SDK
 * @module methods/deleteBusinessMessages
 * @description Delete messages on behalf of a business account. Requires the can\_delete\_sent\_messages business bot right to delete messages sent by the bot itself, or the can\_delete\_all\_messages business bot right to delete any message. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#deleteBusinessMessages Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Delete messages on behalf of a business account. Requires the can\_delete\_sent\_messages business bot right to delete messages sent by the bot itself, or the can\_delete\_all\_messages business bot right to delete any message. Returns True on success.
 * @memberof methods
 * @async
 * @function deleteBusinessMessages
 * @this {Bot} Bot instance
 *  * @param { string } businessConnectionId - Unique identifier of the business connection on behalf of which to delete the messages
 *  * @param { number[] } messageIds - A JSON-serialized list of 1-100 identifiers of messages to delete. All messages must be from the same chat. See deleteMessage for limitations on which messages can be deleted
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.deleteBusinessMessages(...);
 */
export async function deleteBusinessMessages(this: Bot, businessConnectionId: string, messageIds: number[]): Promise<any> {
  const apiParams = {
    businessConnectionId: businessConnectionId,
    messageIds: messageIds,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('deleteBusinessMessages', snakeParams);
  return response;
}
