/**
 * deleteChatStickerSet method implementation for Surfgram Telegram Bot SDK
 * @module methods/deleteChatStickerSet
 * @description Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can\_set\_sticker\_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#deleteChatStickerSet Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can\_set\_sticker\_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
 * @memberof methods
 * @async
 * @function deleteChatStickerSet
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\)
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.deleteChatStickerSet(...);
 */
export async function deleteChatStickerSet(this: Bot, chatId: number | string): Promise<any> {
  const apiParams = {
    chatId: chatId,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('deleteChatStickerSet', snakeParams);
  return response;
}
