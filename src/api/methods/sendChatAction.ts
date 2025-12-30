/**
 * sendChatAction method implementation for Surfgram Telegram Bot SDK
 * @module methods/sendChatAction
 * @description Use this method when you need to tell the user that something is happening on the bot&#39;s side. The status is set for 5 seconds or less \(when a message arrives from your bot, Telegram clients clear its typing status\). Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#sendChatAction Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method when you need to tell the user that something is happening on the bot&#39;s side. The status is set for 5 seconds or less \(when a message arrives from your bot, Telegram clients clear its typing status\). Returns True on success.
 * @memberof methods
 * @async
 * @function sendChatAction
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\). Channel chats and channel direct messages chats aren't supported.
 *  * @param { string } action - Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload\_photo for photos, record\_video or upload\_video for videos, record\_voice or upload\_voice for voice notes, upload\_document for general files, choose\_sticker for stickers, find\_location for location data, record\_video\_note or upload\_video\_note for video notes.
 *  * @param { string } businessConnectionId? - Unique identifier of the business connection on behalf of which the action will be sent
 *  * @param { number } messageThreadId? - Unique identifier for the target message thread; for supergroups only
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.sendChatAction(...);
 */
export async function sendChatAction(
  this: Bot,
  chatId: number | string,
  action: string,
  businessConnectionId?: string,
  messageThreadId?: number
): Promise<any> {
  const apiParams = {
    chatId: chatId,
    action: action,
    businessConnectionId: businessConnectionId,
    messageThreadId: messageThreadId,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('sendChatAction', snakeParams);
  return response;
}
