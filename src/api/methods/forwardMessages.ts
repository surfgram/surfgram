/**
 * forwardMessages method implementation for Surfgram Telegram Bot SDK
 * @module methods/forwardMessages
 * @description Use this method to forward multiple messages of any kind. If some of the specified messages can&#39;t be found or forwarded, they are skipped. Service messages and messages with protected content can&#39;t be forwarded. Album grouping is kept for forwarded messages. On success, an array of MessageId of the sent messages is returned.
 * @see {@link https://core.telegram.org/bots/api#forwardMessages Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { ForwardMessagesParams } from '../interfaces/forwardMessagesParams';

/**
 * Use this method to forward multiple messages of any kind. If some of the specified messages can&#39;t be found or forwarded, they are skipped. Service messages and messages with protected content can&#39;t be forwarded. Album grouping is kept for forwarded messages. On success, an array of MessageId of the sent messages is returned.
 * @memberof methods
 * @async
 * @function forwardMessages
 * @this {Bot} Bot instance
 * @param { ForwardMessagesParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.forwardMessages({
 * // ... params
 * });
 */
export async function forwardMessages(this: Bot, params: ForwardMessagesParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('forwardMessages', snakeParams);
  return response;
}
