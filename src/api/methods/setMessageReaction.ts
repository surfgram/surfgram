/**
 * setMessageReaction method implementation for Surfgram Telegram Bot SDK
 * @module methods/setMessageReaction
 * @description Use this method to change the chosen reactions on a message. Service messages of some types can&#39;t be reacted to. Automatically forwarded messages from a channel to its discussion group have the same available reactions as messages in the channel. Bots can&#39;t use paid reactions. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setMessageReaction Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { ReactionType } from '../types/reactionType';

/**
 * Use this method to change the chosen reactions on a message. Service messages of some types can&#39;t be reacted to. Automatically forwarded messages from a channel to its discussion group have the same available reactions as messages in the channel. Bots can&#39;t use paid reactions. Returns True on success.
 * @memberof methods
 * @async
 * @function setMessageReaction
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
 *  * @param { number } messageId - Identifier of the target message. If the message belongs to a media group, the reaction is set to the first non-deleted message in the group instead.
 *  * @param { ReactionType[] } reaction? - A JSON-serialized list of reaction types to set on the message. Currently, as non-premium users, bots can set up to one reaction per message. A custom emoji reaction can be used if it is either already present on the message or explicitly allowed by chat administrators. Paid reactions can't be used by bots.
 *  * @param { boolean } isBig? - Pass True to set the reaction with a big animation
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setMessageReaction(...);
 */
export async function setMessageReaction(this: Bot, chatId: number | string, messageId: number, reaction?: ReactionType[], isBig?: boolean): Promise<any> {
  const apiParams = {
    chatId: chatId,
    messageId: messageId,
    reaction: reaction,
    isBig: isBig,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('setMessageReaction', snakeParams);
  return response;
}
