/**
 * sendMediaGroup method implementation for Surfgram Telegram Bot SDK
 * @module methods/sendMediaGroup
 * @description Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Message objects that were sent is returned.
 * @see {@link https://core.telegram.org/bots/api#sendMediaGroup Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { SendMediaGroupParams } from '../interfaces/sendMediaGroupParams';
import { ReplyParameters } from '../types/replyParameters';

/**
 * Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Message objects that were sent is returned.
 * @memberof methods
 * @async
 * @function sendMediaGroup
 * @this {Bot} Bot instance
 * @param { SendMediaGroupParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.sendMediaGroup({
 * // ... params
 * });
 */
export async function sendMediaGroup(this: Bot, params: SendMediaGroupParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('sendMediaGroup', snakeParams);
  return response;
}
