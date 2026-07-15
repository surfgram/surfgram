/**
 * deleteEphemeralMessage method implementation for Surfgram Telegram Bot SDK
 * @module methods/deleteEphemeralMessage
 * @description Use this method to delete an ephemeral message. Note that it is not guaranteed that the user will receive the message deletion event, especially if they are offline. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#deleteEphemeralMessage Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to delete an ephemeral message. Note that it is not guaranteed that the user will receive the message deletion event, especially if they are offline. Returns True on success.
 * @memberof methods
 * @async
 * @function deleteEphemeralMessage
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target supergroup in the format @username
 *  * @param { number } receiverUserId - Identifier of the user who received the message
 *  * @param { number } ephemeralMessageId - Identifier of the ephemeral message to delete
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.deleteEphemeralMessage(...);
 */
export async function deleteEphemeralMessage(this: Bot, chatId: number | string, receiverUserId: number, ephemeralMessageId: number): Promise<any> {
  const apiParams = {
    chatId: chatId,
    receiverUserId: receiverUserId,
    ephemeralMessageId: ephemeralMessageId,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('deleteEphemeralMessage', snakeParams);
  return response;
}
