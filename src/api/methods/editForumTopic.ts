/**
 * editForumTopic method implementation for Surfgram Telegram Bot SDK
 * @module methods/editForumTopic
 * @description Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights, unless it is the creator of the topic. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#editForumTopic Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights, unless it is the creator of the topic. Returns True on success.
 * @memberof methods
 * @async
 * @function editForumTopic
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\)
 *  * @param { number } messageThreadId - Unique identifier for the target message thread of the forum topic
 *  * @param { string } name? - New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept
 *  * @param { string } iconCustomEmojiId? - New unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.editForumTopic(...);
 */
export async function editForumTopic(this: Bot, chatId: number | string, messageThreadId: number, name?: string, iconCustomEmojiId?: string): Promise<any> {
  const apiParams = {
    chatId: chatId,
    messageThreadId: messageThreadId,
    name: name,
    iconCustomEmojiId: iconCustomEmojiId,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('editForumTopic', snakeParams);
  return response;
}
