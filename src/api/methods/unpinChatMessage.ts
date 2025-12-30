/**
 * unpinChatMessage method implementation for Surfgram Telegram Bot SDK
 * @module methods/unpinChatMessage
 * @description Use this method to remove a message from the list of pinned messages in a chat. In private chats and channel direct messages chats, all messages can be unpinned. Conversely, the bot must be an administrator with the &#39;can\_pin\_messages&#39; right or the &#39;can\_edit\_messages&#39; right to unpin messages in groups and channels respectively. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#unpinChatMessage Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to remove a message from the list of pinned messages in a chat. In private chats and channel direct messages chats, all messages can be unpinned. Conversely, the bot must be an administrator with the &#39;can\_pin\_messages&#39; right or the &#39;can\_edit\_messages&#39; right to unpin messages in groups and channels respectively. Returns True on success.
 * @memberof methods
 * @async
 * @function unpinChatMessage
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
 *  * @param { string } businessConnectionId? - Unique identifier of the business connection on behalf of which the message will be unpinned
 *  * @param { number } messageId? - Identifier of the message to unpin. Required if business\_connection\_id is specified. If not specified, the most recent pinned message \(by sending date\) will be unpinned.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.unpinChatMessage(...);
 */
export async function unpinChatMessage(this: Bot, chatId: number | string, businessConnectionId?: string, messageId?: number): Promise<any> {
  const apiParams = {
    chatId: chatId,
    businessConnectionId: businessConnectionId,
    messageId: messageId,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('unpinChatMessage', snakeParams);
  return response;
}
