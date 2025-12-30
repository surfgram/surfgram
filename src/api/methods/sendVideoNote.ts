/**
 * sendVideoNote method implementation for Surfgram Telegram Bot SDK
 * @module methods/sendVideoNote
 * @description As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendVideoNote Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { SendVideoNoteParams } from '../interfaces/sendVideoNoteParams';
import { InputFile } from '../types/inputFile';
import { SuggestedPostParameters } from '../types/suggestedPostParameters';
import { ReplyParameters } from '../types/replyParameters';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';
import { ReplyKeyboardMarkup } from '../types/replyKeyboardMarkup';
import { ReplyKeyboardRemove } from '../types/replyKeyboardRemove';
import { ForceReply } from '../types/forceReply';

/**
 * As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned.
 * @memberof methods
 * @async
 * @function sendVideoNote
 * @this {Bot} Bot instance
 * @param { SendVideoNoteParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.sendVideoNote({
 * // ... params
 * });
 */
export async function sendVideoNote(this: Bot, params: SendVideoNoteParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('sendVideoNote', snakeParams);
  return response;
}
