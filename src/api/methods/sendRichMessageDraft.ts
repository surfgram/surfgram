/**
 * sendRichMessageDraft method implementation for Surfgram Telegram Bot SDK
 * @module methods/sendRichMessageDraft
 * @description Use this method to stream a partial rich message to a user while the message is being generated. Note that the streamed draft is ephemeral and acts as a temporary 30-second preview - once the output is finalized, you must call sendRichMessage with the complete message to persist it in the user&#39;s chat. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#sendRichMessageDraft Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { InputRichMessage } from '../types/inputRichMessage';

/**
 * Use this method to stream a partial rich message to a user while the message is being generated. Note that the streamed draft is ephemeral and acts as a temporary 30-second preview - once the output is finalized, you must call sendRichMessage with the complete message to persist it in the user&#39;s chat. Returns True on success.
 * @memberof methods
 * @async
 * @function sendRichMessageDraft
 * @this {Bot} Bot instance
 *  * @param { number } chatId - Unique identifier for the target private chat
 *  * @param { number } draftId - Unique identifier of the message draft; must be non-zero. Changes to drafts with the same identifier are animated.
 *  * @param { InputRichMessage } richMessage - The partial message to be streamed. Direct upload of new files isn't supported.
 *  * @param { number } messageThreadId? - Unique identifier for the target message thread
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.sendRichMessageDraft(...);
 */
export async function sendRichMessageDraft(this: Bot, chatId: number, draftId: number, richMessage: InputRichMessage, messageThreadId?: number): Promise<any> {
  const apiParams = {
    chatId: chatId,
    draftId: draftId,
    richMessage: richMessage,
    messageThreadId: messageThreadId,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('sendRichMessageDraft', snakeParams);
  return response;
}
