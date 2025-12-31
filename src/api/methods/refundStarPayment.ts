/**
 * refundStarPayment method implementation for Surfgram Telegram Bot SDK
 * @module methods/refundStarPayment
 * @description Refunds a successful payment in Telegram Stars. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#refundStarPayment Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Refunds a successful payment in Telegram Stars. Returns True on success.
 * @memberof methods
 * @async
 * @function refundStarPayment
 * @this {Bot} Bot instance
 *  * @param { number } userId - Identifier of the user whose payment will be refunded
 *  * @param { string } telegramPaymentChargeId - Telegram payment identifier
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.refundStarPayment(...);
 */
export async function refundStarPayment(
	this: Bot,
	userId: number,
	telegramPaymentChargeId: string,
): Promise<any> {
	const apiParams = {
		userId: userId,
		telegramPaymentChargeId: telegramPaymentChargeId,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>("refundStarPayment", snakeParams);
	return response;
}
