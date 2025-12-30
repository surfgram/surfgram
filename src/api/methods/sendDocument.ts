/**
 * sendDocument method implementation for Surfgram Telegram Bot SDK
 * @module methods/sendDocument
 * @description Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
 * @see {@link https://core.telegram.org/bots/api#sendDocument Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { SendDocumentParams } from '../interfaces/sendDocumentParams';
import { InputFile } from '../types/inputFile';
import { MessageEntity } from '../types/messageEntity';
import { SuggestedPostParameters } from '../types/suggestedPostParameters';
import { ReplyParameters } from '../types/replyParameters';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';
import { ReplyKeyboardMarkup } from '../types/replyKeyboardMarkup';
import { ReplyKeyboardRemove } from '../types/replyKeyboardRemove';
import { ForceReply } from '../types/forceReply';

/**
 * Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
 * @memberof methods
 * @async
 * @function sendDocument
 * @this {Bot} Bot instance
 * @param { SendDocumentParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.sendDocument({
 * // ... params
 * });
 */
export async function sendDocument(this: Bot, params: SendDocumentParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('sendDocument', snakeParams);
  return response;
}
