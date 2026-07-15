/**
 * editEphemeralMessageReplyMarkup method implementation for Surfgram Telegram Bot SDK
 * @module methods/editEphemeralMessageReplyMarkup
 * @description Use this method to edit only the reply markup of an ephemeral message. Note that it is not guaranteed that the user will receive the message edit event, especially if they are offline. On success, True is returned.
 * @see {@link https://core.telegram.org/bots/api#editEphemeralMessageReplyMarkup Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';

/**
 * Use this method to edit only the reply markup of an ephemeral message. Note that it is not guaranteed that the user will receive the message edit event, especially if they are offline. On success, True is returned.
 * @memberof methods
 * @async
 * @function editEphemeralMessageReplyMarkup
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target supergroup in the format @username
 *  * @param { number } receiverUserId - Identifier of the user who received the message
 *  * @param { number } ephemeralMessageId - Identifier of the ephemeral message to edit
 *  * @param { InlineKeyboardMarkup } replyMarkup? - A JSON-serialized object for an inline keyboard
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.editEphemeralMessageReplyMarkup(...);
 */
export async function editEphemeralMessageReplyMarkup(this: Bot, chatId: number | string, receiverUserId: number, ephemeralMessageId: number, replyMarkup?: InlineKeyboardMarkup): Promise<any> {
  const apiParams = {
    chatId: chatId,
    receiverUserId: receiverUserId,
    ephemeralMessageId: ephemeralMessageId,
    replyMarkup: replyMarkup,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('editEphemeralMessageReplyMarkup', snakeParams);
  return response;
}
