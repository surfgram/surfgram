/**
 * ChatMemberAdministrator class for Surfgram Telegram Bot SDK
 * @module types/chatMemberAdministrator
 * @description Represents a chat member that has some additional privileges.
 * @see {@link https://core.telegram.org/bots/api#chatmemberadministrator Telegram API Documentation}
 * @class ChatMemberAdministrator
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";
import { User } from "./user";

/**
 * Represents a ChatMemberAdministrator object from the Telegram Bot API
 * @class ChatMemberAdministrator
 */
export class ChatMemberAdministrator {
	/**
	 * The member's status in the chat, always “administrator”
	 * @type { string }
	 * @memberof ChatMemberAdministrator
	 * @instance
	 * @public
	 */
	status!: string;

	/**
	 * Information about the user
	 * @type { User }
	 * @memberof ChatMemberAdministrator
	 * @instance
	 * @public
	 */
	user!: User;

	/**
	 * True, if the bot is allowed to edit administrator privileges of that user
	 * @type { boolean }
	 * @memberof ChatMemberAdministrator
	 * @instance
	 * @public
	 */
	canBeEdited!: boolean;

	/**
	 * True, if the user's presence in the chat is hidden
	 * @type { boolean }
	 * @memberof ChatMemberAdministrator
	 * @instance
	 * @public
	 */
	isAnonymous!: boolean;

	/**
	 * True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege.
	 * @type { boolean }
	 * @memberof ChatMemberAdministrator
	 * @instance
	 * @public
	 */
	canManageChat!: boolean;

	/**
	 * True, if the administrator can delete messages of other users
	 * @type { boolean }
	 * @memberof ChatMemberAdministrator
	 * @instance
	 * @public
	 */
	canDeleteMessages!: boolean;

	/**
	 * True, if the administrator can manage video chats
	 * @type { boolean }
	 * @memberof ChatMemberAdministrator
	 * @instance
	 * @public
	 */
	canManageVideoChats!: boolean;

	/**
	 * True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics
	 * @type { boolean }
	 * @memberof ChatMemberAdministrator
	 * @instance
	 * @public
	 */
	canRestrictMembers!: boolean;

	/**
	 * True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly \(promoted by administrators that were appointed by the user\)
	 * @type { boolean }
	 * @memberof ChatMemberAdministrator
	 * @instance
	 * @public
	 */
	canPromoteMembers!: boolean;

	/**
	 * True, if the user is allowed to change the chat title, photo and other settings
	 * @type { boolean }
	 * @memberof ChatMemberAdministrator
	 * @instance
	 * @public
	 */
	canChangeInfo!: boolean;

	/**
	 * True, if the user is allowed to invite new users to the chat
	 * @type { boolean }
	 * @memberof ChatMemberAdministrator
	 * @instance
	 * @public
	 */
	canInviteUsers!: boolean;

	/**
	 * True, if the administrator can post stories to the chat
	 * @type { boolean }
	 * @memberof ChatMemberAdministrator
	 * @instance
	 * @public
	 */
	canPostStories!: boolean;

	/**
	 * True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive
	 * @type { boolean }
	 * @memberof ChatMemberAdministrator
	 * @instance
	 * @public
	 */
	canEditStories!: boolean;

	/**
	 * True, if the administrator can delete stories posted by other users
	 * @type { boolean }
	 * @memberof ChatMemberAdministrator
	 * @instance
	 * @public
	 */
	canDeleteStories!: boolean;

	/**
	 * Optional. True, if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only
	 * @type { boolean }
	 * @memberof ChatMemberAdministrator
	 * @instance
	 * @public
	 */
	canPostMessages?: boolean;

	/**
	 * Optional. True, if the administrator can edit messages of other users and can pin messages; for channels only
	 * @type { boolean }
	 * @memberof ChatMemberAdministrator
	 * @instance
	 * @public
	 */
	canEditMessages?: boolean;

	/**
	 * Optional. True, if the user is allowed to pin messages; for groups and supergroups only
	 * @type { boolean }
	 * @memberof ChatMemberAdministrator
	 * @instance
	 * @public
	 */
	canPinMessages?: boolean;

	/**
	 * Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only
	 * @type { boolean }
	 * @memberof ChatMemberAdministrator
	 * @instance
	 * @public
	 */
	canManageTopics?: boolean;

	/**
	 * Optional. True, if the administrator can manage direct messages of the channel and decline suggested posts; for channels only
	 * @type { boolean }
	 * @memberof ChatMemberAdministrator
	 * @instance
	 * @public
	 */
	canManageDirectMessages?: boolean;

	/**
	 * Optional. Custom title for this user
	 * @type { string }
	 * @memberof ChatMemberAdministrator
	 * @instance
	 * @public
	 */
	customTitle?: string;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof ChatMemberAdministrator
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof ChatMemberAdministrator
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new ChatMemberAdministrator instance from raw Telegram API data
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
