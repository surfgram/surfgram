/**
 * setBusinessAccountGiftSettings method implementation for Surfgram Telegram Bot SDK
 * @module methods/setBusinessAccountGiftSettings
 * @description Changes the privacy settings pertaining to incoming gifts in a managed business account. Requires the can\_change\_gift\_settings business bot right. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setBusinessAccountGiftSettings Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { AcceptedGiftTypes } from "../types/acceptedGiftTypes";

/**
 * Changes the privacy settings pertaining to incoming gifts in a managed business account. Requires the can\_change\_gift\_settings business bot right. Returns True on success.
 * @memberof methods
 * @async
 * @function setBusinessAccountGiftSettings
 * @this {Bot} Bot instance
 *  * @param { string } businessConnectionId - Unique identifier of the business connection
 *  * @param { boolean } showGiftButton - Pass True, if a button for sending a gift to the user or by the business account must always be shown in the input field
 *  * @param { AcceptedGiftTypes } acceptedGiftTypes - Types of gifts accepted by the business account
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setBusinessAccountGiftSettings(...);
 */
export async function setBusinessAccountGiftSettings(
	this: Bot,
	businessConnectionId: string,
	showGiftButton: boolean,
	acceptedGiftTypes: AcceptedGiftTypes,
): Promise<any> {
	const apiParams = {
		businessConnectionId: businessConnectionId,
		showGiftButton: showGiftButton,
		acceptedGiftTypes: acceptedGiftTypes,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>(
		"setBusinessAccountGiftSettings",
		snakeParams,
	);
	return response;
}
