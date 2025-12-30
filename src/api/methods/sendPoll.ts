/**
 * sendPoll method implementation for Surfgram Telegram Bot SDK
 * @module methods/sendPoll
 * @description Use this method to send a native poll. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendPoll Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { SendPollParams } from '../interfaces/sendPollParams';
import { InputPollOption } from '../types/inputPollOption';
import { MessageEntity } from '../types/messageEntity';
import { ReplyParameters } from '../types/replyParameters';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';
import { ReplyKeyboardMarkup } from '../types/replyKeyboardMarkup';
import { ReplyKeyboardRemove } from '../types/replyKeyboardRemove';
import { ForceReply } from '../types/forceReply';

/**
 * Use this method to send a native poll. On success, the sent Message is returned.
 * @memberof methods
 * @async
 * @function sendPoll
 * @this {Bot} Bot instance
 * @param { SendPollParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.sendPoll({
 * // ... params
 * });
 */
export async function sendPoll(this: Bot, params: SendPollParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('sendPoll', snakeParams);
  return response;
}
