/**
 * sendLivePhoto method implementation for Surfgram Telegram Bot SDK
 * @module methods/sendLivePhoto
 * @description Use this method to send live photos. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendLivePhoto Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { SendLivePhotoParams } from '../interfaces/sendLivePhotoParams';
import { InputFile } from '../types/inputFile';
import { MessageEntity } from '../types/messageEntity';
import { SuggestedPostParameters } from '../types/suggestedPostParameters';
import { ReplyParameters } from '../types/replyParameters';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';
import { ReplyKeyboardMarkup } from '../types/replyKeyboardMarkup';
import { ReplyKeyboardRemove } from '../types/replyKeyboardRemove';
import { ForceReply } from '../types/forceReply';

/**
 * Use this method to send live photos. On success, the sent Message is returned.
 * @memberof methods
 * @async
 * @function sendLivePhoto
 * @this {Bot} Bot instance
 * @param { SendLivePhotoParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.sendLivePhoto({
 * // ... params
 * });
 */
export async function sendLivePhoto(this: Bot, params: SendLivePhotoParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('sendLivePhoto', snakeParams);
  return response;
}
