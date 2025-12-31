/**
 * forwardMessage method implementation for Surfgram Telegram Bot SDK
 * @module methods/forwardMessage
 * @description Use this method to forward messages of any kind. Service messages and messages with protected content can&#39;t be forwarded. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#forwardMessage Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { ForwardMessageParams } from '../interfaces/forwardMessageParams';
import { SuggestedPostParameters } from '../types/suggestedPostParameters';

/**
 * Use this method to forward messages of any kind. Service messages and messages with protected content can&#39;t be forwarded. On success, the sent Message is returned.
 * @memberof methods
 * @async
 * @function forwardMessage
 * @this {Bot} Bot instance
 * @param { ForwardMessageParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.forwardMessage({
 * // ... params
 * });
 */
export async function forwardMessage(this: Bot, params: ForwardMessageParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('forwardMessage', snakeParams);
  return response;
}
