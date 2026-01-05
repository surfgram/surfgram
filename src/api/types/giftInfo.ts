/**
 * GiftInfo class for Surfgram Telegram Bot SDK
 * @module types/giftInfo
 * @description Describes a service message about a regular gift that was sent or received.
 * @see {@link https://core.telegram.org/bots/api#giftinfo Telegram API Documentation}
 * @class GiftInfo
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";
import { Gift } from "./gift";
import { MessageEntity } from "./messageEntity";

/**
 * Represents a GiftInfo object from the Telegram Bot API
 * @class GiftInfo
 */
export class GiftInfo {
	/**
	 * Information about the gift
	 * @type { Gift }
	 * @memberof GiftInfo
	 * @instance
	 * @public
	 */
	gift!: Gift;

	/**
	 * Optional. Unique identifier of the received gift for the bot; only present for gifts received on behalf of business accounts
	 * @type { string }
	 * @memberof GiftInfo
	 * @instance
	 * @public
	 */
	ownedGiftId?: string;

	/**
	 * Optional. Number of Telegram Stars that can be claimed by the receiver by converting the gift; omitted if conversion to Telegram Stars is impossible
	 * @type { number }
	 * @memberof GiftInfo
	 * @instance
	 * @public
	 */
	convertStarCount?: number;

	/**
	 * Optional. Number of Telegram Stars that were prepaid for the ability to upgrade the gift
	 * @type { number }
	 * @memberof GiftInfo
	 * @instance
	 * @public
	 */
	prepaidUpgradeStarCount?: number;

	/**
	 * Optional. True, if the gift's upgrade was purchased after the gift was sent
	 * @type { boolean }
	 * @memberof GiftInfo
	 * @instance
	 * @public
	 */
	isUpgradeSeparate?: boolean;

	/**
	 * Optional. True, if the gift can be upgraded to a unique gift
	 * @type { boolean }
	 * @memberof GiftInfo
	 * @instance
	 * @public
	 */
	canBeUpgraded?: boolean;

	/**
	 * Optional. Text of the message that was added to the gift
	 * @type { string }
	 * @memberof GiftInfo
	 * @instance
	 * @public
	 */
	text?: string;

	/**
	 * Optional. Special entities that appear in the text
	 * @type { MessageEntity[] }
	 * @memberof GiftInfo
	 * @instance
	 * @public
	 */
	entities?: MessageEntity[];

	/**
	 * Optional. True, if the sender and gift text are shown only to the gift receiver; otherwise, everyone will be able to see them
	 * @type { boolean }
	 * @memberof GiftInfo
	 * @instance
	 * @public
	 */
	isPrivate?: boolean;

	/**
	 * Optional. Unique number reserved for this gift when upgraded. See the number field in UniqueGift
	 * @type { number }
	 * @memberof GiftInfo
	 * @instance
	 * @public
	 */
	uniqueGiftNumber?: number;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof GiftInfo
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof GiftInfo
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new GiftInfo instance from raw Telegram API data
	 * @constructor
	 * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
	 * @param {Bot} bot - Bot instance for executing methods
	 * @example
	 * const message = new Message(rawData, botInstance);
	 */
	constructor(raw?: TelegramObject, bot?: Bot) {
		this.raw = raw;
		this.bot = bot;
		const converted = snakeToCamel(raw);
		Object.assign(this, converted);
	}
}
