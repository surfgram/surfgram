/**
 * sendMessageDraft method implementation for Surfgram Telegram Bot SDK
 * @module methods/sendMessageDraft
 * @description Use this method to stream a partial message to a user while the message is being generated. Note that the streamed draft is ephemeral and acts as a temporary 30-second preview - once the output is finalized, you must call sendMessage with the complete message to persist it in the user&#39;s chat. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#sendMessageDraft Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { SendMessageDraftParams } from '../interfaces/sendMessageDraftParams';
import { MessageEntity } from '../types/messageEntity';

/**
 * Use this method to stream a partial message to a user while the message is being generated. Note that the streamed draft is ephemeral and acts as a temporary 30-second preview - once the output is finalized, you must call sendMessage with the complete message to persist it in the user&#39;s chat. Returns True on success.
 * @memberof methods
 * @async
 * @function sendMessageDraft
 * @this {Bot} Bot instance
 * @param { SendMessageDraftParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.sendMessageDraft({
 * // ... params
 * });
 */
export async function sendMessageDraft(this: Bot, params: SendMessageDraftParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('sendMessageDraft', snakeParams);
  return response;
}
