/**
 * sendGame method implementation for Surfgram Telegram Bot SDK
 * @module methods/sendGame
 * @description Use this method to send a game. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendGame Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { SendGameParams } from '../interfaces/sendGameParams';
import { ReplyParameters } from '../types/replyParameters';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';

/**
 * Use this method to send a game. On success, the sent Message is returned.
 * @memberof methods
 * @async
 * @function sendGame
 * @this {Bot} Bot instance
 * @param { SendGameParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.sendGame({
 * // ... params
 * });
 */
export async function sendGame(this: Bot, params: SendGameParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('sendGame', snakeParams);
  return response;
}
