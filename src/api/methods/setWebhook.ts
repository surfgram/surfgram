/**
 * setWebhook method implementation for Surfgram Telegram Bot SDK
 * @module methods/setWebhook
 * @description Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case of an unsuccessful request \(a request with response HTTP status code different from 2XY\), we will repeat the request and give up after a reasonable amount of attempts. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setWebhook Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { SetWebhookParams } from '../interfaces/setWebhookParams';
import { InputFile } from '../types/inputFile';

/**
 * Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case of an unsuccessful request \(a request with response HTTP status code different from 2XY\), we will repeat the request and give up after a reasonable amount of attempts. Returns True on success.
 * @memberof methods
 * @async
 * @function setWebhook
 * @this {Bot} Bot instance
 * @param { SetWebhookParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.setWebhook({
 * // ... params
 * });
 */
export async function setWebhook(this: Bot, params: SetWebhookParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('setWebhook', snakeParams);
  return response;
}
