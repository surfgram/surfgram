/**
 * ChatInviteLink class for Surfgram Telegram Bot SDK
 * @module types/chatInviteLink
 * @description Represents an invite link for a chat.
 * @see {@link https://core.telegram.org/bots/api#chatinvitelink Telegram API Documentation}
 * @class ChatInviteLink
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";
import { User } from "./user";

/**
 * Represents a ChatInviteLink object from the Telegram Bot API
 * @class ChatInviteLink
 */
export class ChatInviteLink {
	/**
	 * The invite link. If the link was created by another chat administrator, then the second part of the link will be replaced with “…”.
	 * @type { string }
	 * @memberof ChatInviteLink
	 * @instance
	 * @public
	 */
	inviteLink!: string;

	/**
	 * Creator of the link
	 * @type { User }
	 * @memberof ChatInviteLink
	 * @instance
	 * @public
	 */
	creator!: User;

	/**
	 * True, if users joining the chat via the link need to be approved by chat administrators
	 * @type { boolean }
	 * @memberof ChatInviteLink
	 * @instance
	 * @public
	 */
	createsJoinRequest!: boolean;

	/**
	 * True, if the link is primary
	 * @type { boolean }
	 * @memberof ChatInviteLink
	 * @instance
	 * @public
	 */
	isPrimary!: boolean;

	/**
	 * True, if the link is revoked
	 * @type { boolean }
	 * @memberof ChatInviteLink
	 * @instance
	 * @public
	 */
	isRevoked!: boolean;

	/**
	 * Optional. Invite link name
	 * @type { string }
	 * @memberof ChatInviteLink
	 * @instance
	 * @public
	 */
	name?: string;

	/**
	 * Optional. Point in time \(Unix timestamp\) when the link will expire or has been expired
	 * @type { number }
	 * @memberof ChatInviteLink
	 * @instance
	 * @public
	 */
	expireDate?: number;

	/**
	 * Optional. The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
	 * @type { number }
	 * @memberof ChatInviteLink
	 * @instance
	 * @public
	 */
	memberLimit?: number;

	/**
	 * Optional. Number of pending join requests created using this link
	 * @type { number }
	 * @memberof ChatInviteLink
	 * @instance
	 * @public
	 */
	pendingJoinRequestCount?: number;

	/**
	 * Optional. The number of seconds the subscription will be active for before the next payment
	 * @type { number }
	 * @memberof ChatInviteLink
	 * @instance
	 * @public
	 */
	subscriptionPeriod?: number;

	/**
	 * Optional. The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat using the link
	 * @type { number }
	 * @memberof ChatInviteLink
	 * @instance
	 * @public
	 */
	subscriptionPrice?: number;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof ChatInviteLink
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof ChatInviteLink
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new ChatInviteLink instance from raw Telegram API data
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
