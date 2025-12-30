/**
 * sendMessage method implementation for Surfgram Telegram Bot SDK
 * @module methods/sendMessage
 * @description Use this method to send text messages. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendMessage Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { SendMessageParams } from '../interfaces/sendMessageParams';
import { MessageEntity } from '../types/messageEntity';
import { LinkPreviewOptions } from '../types/linkPreviewOptions';
import { SuggestedPostParameters } from '../types/suggestedPostParameters';
import { ReplyParameters } from '../types/replyParameters';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';
import { ReplyKeyboardMarkup } from '../types/replyKeyboardMarkup';
import { ReplyKeyboardRemove } from '../types/replyKeyboardRemove';
import { ForceReply } from '../types/forceReply';

/**
 * Use this method to send text messages. On success, the sent Message is returned.
 * @memberof methods
 * @async
 * @function sendMessage
 * @this {Bot} Bot instance
 * @param { SendMessageParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.sendMessage({
 * // ... params
 * });
 */
export async function sendMessage(this: Bot, params: SendMessageParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('sendMessage', snakeParams);
  return response;
}
