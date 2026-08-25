/**
 * sendRichMessageDraft method implementation for Surfgram Telegram Bot SDK
 * @module methods/sendRichMessageDraft
 * @description Use this method to stream a partial rich message to a user while the message is being generated. Note that the streamed draft is ephemeral and acts as a temporary 30-second preview - once the output is finalized, you must call sendRichMessage with the complete message to persist it in the user&#39;s chat. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#sendRichMessageDraft Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { SendRichMessageDraftParams } from '../interfaces/sendRichMessageDraftParams';
import { InputRichMessage } from '../types/inputRichMessage';

/**
 * Use this method to stream a partial rich message to a user while the message is being generated. Note that the streamed draft is ephemeral and acts as a temporary 30-second preview - once the output is finalized, you must call sendRichMessage with the complete message to persist it in the user&#39;s chat. Returns True on success.
 * @memberof methods
 * @async
 * @function sendRichMessageDraft
 * @this {Bot} Bot instance
 * @param { SendRichMessageDraftParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.sendRichMessageDraft({
 * // ... params
 * });
 */
export async function sendRichMessageDraft(this: Bot, params: SendRichMessageDraftParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('sendRichMessageDraft', snakeParams);
  return response;
}
