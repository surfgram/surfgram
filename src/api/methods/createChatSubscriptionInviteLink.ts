/**
 * createChatSubscriptionInviteLink method implementation for Surfgram Telegram Bot SDK
 * @module methods/createChatSubscriptionInviteLink
 * @description Use this method to create a subscription invite link for a channel chat. The bot must have the can\_invite\_users administrator rights. The link can be edited using the method editChatSubscriptionInviteLink or revoked using the method revokeChatInviteLink. Returns the new invite link as a ChatInviteLink object.
 * @see {@link https://core.telegram.org/bots/api#createChatSubscriptionInviteLink Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';

/**
 * Use this method to create a subscription invite link for a channel chat. The bot must have the can\_invite\_users administrator rights. The link can be edited using the method editChatSubscriptionInviteLink or revoked using the method revokeChatInviteLink. Returns the new invite link as a ChatInviteLink object.
 * @memberof methods
 * @async
 * @function createChatSubscriptionInviteLink
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target channel chat or username of the target channel \(in the format @channelusername\)
 *  * @param { number } subscriptionPeriod - The number of seconds the subscription will be active for before the next payment. Currently, it must always be 2592000 \(30 days\).
 *  * @param { number } subscriptionPrice - The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat; 1-10000
 *  * @param { string } name? - Invite link name; 0-32 characters
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.createChatSubscriptionInviteLink(...);
 */
export async function createChatSubscriptionInviteLink(this: Bot, chatId: number | string, subscriptionPeriod: number, subscriptionPrice: number, name?: string): Promise<any> {
  const apiParams = {
    chatId: chatId,
    subscriptionPeriod: subscriptionPeriod,
    subscriptionPrice: subscriptionPrice,
    name: name,
  };
  const snakeParams = camelToSnake(apiParams);
  const response = await this.callApi<any>('createChatSubscriptionInviteLink', snakeParams);
  return response;
}
