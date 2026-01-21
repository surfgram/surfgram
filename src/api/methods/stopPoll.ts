/**
 * stopPoll method implementation for Surfgram Telegram Bot SDK
 * @module methods/stopPoll
 * @description Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned.
 * @see {@link https://core.telegram.org/bots/api#stopPoll Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';

/**
 * Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned.
 * @memberof methods
 * @async
 * @function stopPoll
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
 *  * @param { number } messageId - Identifier of the original message with the poll
 *  * @param { string } businessConnectionId? - Unique identifier of the business connection on behalf of which the message to be edited was sent
 *  * @param { InlineKeyboardMarkup } replyMarkup? - A JSON-serialized object for a new message inline keyboard.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.stopPoll(...);
 */
export async function stopPoll(this: Bot, chatId: number | string, messageId: number, businessConnectionId?: string, replyMarkup?: InlineKeyboardMarkup): Promise<any> {
  const apiParams = {
    chatId: chatId,
    messageId: messageId,
    businessConnectionId: businessConnectionId,
    replyMarkup: replyMarkup,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('stopPoll', snakeParams);
  return response;
}
