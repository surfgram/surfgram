/**
 * setUserEmojiStatus method implementation for Surfgram Telegram Bot SDK
 * @module methods/setUserEmojiStatus
 * @description Changes the emoji status for a given user that previously allowed the bot to manage their emoji status via the Mini App method requestEmojiStatusAccess. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setUserEmojiStatus Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Changes the emoji status for a given user that previously allowed the bot to manage their emoji status via the Mini App method requestEmojiStatusAccess. Returns True on success.
 * @memberof methods
 * @async
 * @function setUserEmojiStatus
 * @this {Bot} Bot instance
 *  * @param { number } userId - Unique identifier of the target user
 *  * @param { string } emojiStatusCustomEmojiId? - Custom emoji identifier of the emoji status to set. Pass an empty string to remove the status.
 *  * @param { number } emojiStatusExpirationDate? - Expiration date of the emoji status, if any
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setUserEmojiStatus(...);
 */
export async function setUserEmojiStatus(
  this: Bot,
  userId: number,
  emojiStatusCustomEmojiId?: string,
  emojiStatusExpirationDate?: number
): Promise<any> {
  const apiParams = {
    userId: userId,
    emojiStatusCustomEmojiId: emojiStatusCustomEmojiId,
    emojiStatusExpirationDate: emojiStatusExpirationDate,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('setUserEmojiStatus', snakeParams);
  return response;
}
