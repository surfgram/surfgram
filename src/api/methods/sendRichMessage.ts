/**
 * sendRichMessage method implementation for Surfgram Telegram Bot SDK
 * @module methods/sendRichMessage
 * @description Use this method to send rich messages. If the message contains a block with a media element, then the bot must have the right to send the media to the chat. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendRichMessage Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { SendRichMessageParams } from '../interfaces/sendRichMessageParams';
import { InputRichMessage } from '../types/inputRichMessage';
import { SuggestedPostParameters } from '../types/suggestedPostParameters';
import { ReplyParameters } from '../types/replyParameters';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';
import { ReplyKeyboardMarkup } from '../types/replyKeyboardMarkup';
import { ReplyKeyboardRemove } from '../types/replyKeyboardRemove';
import { ForceReply } from '../types/forceReply';

/**
 * Use this method to send rich messages. If the message contains a block with a media element, then the bot must have the right to send the media to the chat. On success, the sent Message is returned.
 * @memberof methods
 * @async
 * @function sendRichMessage
 * @this {Bot} Bot instance
 * @param { SendRichMessageParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.sendRichMessage({
 * // ... params
 * });
 */
export async function sendRichMessage(this: Bot, params: SendRichMessageParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('sendRichMessage', snakeParams);
  return response;
}
