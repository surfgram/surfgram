/**
 * giftPremiumSubscription method implementation for Surfgram Telegram Bot SDK
 * @module methods/giftPremiumSubscription
 * @description Gifts a Telegram Premium subscription to the given user. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#giftPremiumSubscription Telegram API Documentation}
 */

import { Bot } from '../../core/bot';
import { camelToSnake } from '../../core/utils';
import { GiftPremiumSubscriptionParams } from '../interfaces/giftPremiumSubscriptionParams';
import { MessageEntity } from '../types/messageEntity';

/**
 * Gifts a Telegram Premium subscription to the given user. Returns True on success.
 * @memberof methods
 * @async
 * @function giftPremiumSubscription
 * @this {Bot} Bot instance
 * @param { GiftPremiumSubscriptionParams } params - Method parameters object
 * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Using params object
 * await bot.giftPremiumSubscription({
 * // ... params
 * });
 */
export async function giftPremiumSubscription(this: Bot, params: GiftPremiumSubscriptionParams): Promise<any> {
  const snakeParams = camelToSnake(params);
  const response = await this.callApi<any>('giftPremiumSubscription', snakeParams);
  return response;
}
