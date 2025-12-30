/**
 * savePreparedInlineMessage method implementation for Surfgram Telegram Bot SDK
 * @module methods/savePreparedInlineMessage
 * @description Stores a message that can be sent by a user of a Mini App. Returns a PreparedInlineMessage object.
 * @see {@link https://core.telegram.org/bots/api#savePreparedInlineMessage Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { SavePreparedInlineMessageParams } from '../interfaces/savePreparedInlineMessageParams';
import { InlineQueryResult } from '../types/inlineQueryResult';

/**
 * Stores a message that can be sent by a user of a Mini App. Returns a PreparedInlineMessage object.
 * @memberof methods
 * @async
 * @function savePreparedInlineMessage
 * @this {Bot} Bot instance
 * @param { SavePreparedInlineMessageParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.savePreparedInlineMessage({
 * // ... params
 * });
 */
export async function savePreparedInlineMessage(
  this: Bot,
  params: SavePreparedInlineMessageParams
): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('savePreparedInlineMessage', snakeParams);
  return response;
}
