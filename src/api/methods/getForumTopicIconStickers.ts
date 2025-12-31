/**
 * getForumTopicIconStickers method implementation for Surfgram Telegram Bot SDK
 * @module methods/getForumTopicIconStickers
 * @description Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.
 * @see {@link https://core.telegram.org/bots/api#getForumTopicIconStickers Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.
 * @memberof methods
 * @async
 * @function getForumTopicIconStickers
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\)
 *  * @param { string } name - Topic name, 1-128 characters
 *  * @param { number } iconColor? - Color of the topic icon in RGB format. Currently, must be one of 7322096 \(0x6FB9F0\), 16766590 \(0xFFD67E\), 13338331 \(0xCB86DB\), 9367192 \(0x8EEE98\), 16749490 \(0xFF93B2\), or 16478047 \(0xFB6F5F\)
 *  * @param { string } iconCustomEmojiId? - Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.getForumTopicIconStickers(...);
 */
export async function getForumTopicIconStickers(this: Bot, chatId: number | string, name: string, iconColor?: number, iconCustomEmojiId?: string): Promise<any> {
  const apiParams = {
    chatId: chatId,
    name: name,
    iconColor: iconColor,
    iconCustomEmojiId: iconCustomEmojiId,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('getForumTopicIconStickers', snakeParams);
  return response;
}
