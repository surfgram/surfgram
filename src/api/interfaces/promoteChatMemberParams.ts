/**
 * Parameters interface for the promoteChatMember method
 * @interface PromoteChatMemberParams
 * @description Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#promoteChatMember Telegram API Documentation}
 */


export interface PromoteChatMemberParams {
  /**
   * Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
   * @type { number | string }
   * @originalType Integer or String
   * @required Yes
   */
  chatId: number | string;

  /**
   * Unique identifier of the target user
   * @type { number }
   * @originalType Integer
   * @required Yes
   */
  userId: number;

  /**
   * Pass True if the administrator's presence in the chat is hidden
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  isAnonymous?: boolean;

  /**
   * Pass True if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege.
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  canManageChat?: boolean;

  /**
   * Pass True if the administrator can delete messages of other users
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  canDeleteMessages?: boolean;

  /**
   * Pass True if the administrator can manage video chats
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  canManageVideoChats?: boolean;

  /**
   * Pass True if the administrator can restrict, ban or unban chat members, or access supergroup statistics. For backward compatibility, defaults to True for promotions of channel administrators
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  canRestrictMembers?: boolean;

  /**
   * Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly \(promoted by administrators that were appointed by him\)
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  canPromoteMembers?: boolean;

  /**
   * Pass True if the administrator can change chat title, photo and other settings
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  canChangeInfo?: boolean;

  /**
   * Pass True if the administrator can invite new users to the chat
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  canInviteUsers?: boolean;

  /**
   * Pass True if the administrator can post stories to the chat
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  canPostStories?: boolean;

  /**
   * Pass True if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  canEditStories?: boolean;

  /**
   * Pass True if the administrator can delete stories posted by other users
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  canDeleteStories?: boolean;

  /**
   * Pass True if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  canPostMessages?: boolean;

  /**
   * Pass True if the administrator can edit messages of other users and can pin messages; for channels only
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  canEditMessages?: boolean;

  /**
   * Pass True if the administrator can pin messages; for supergroups only
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  canPinMessages?: boolean;

  /**
   * Pass True if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  canManageTopics?: boolean;

  /**
   * Pass True if the administrator can manage direct messages within the channel and decline suggested posts; for channels only
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  canManageDirectMessages?: boolean;

}
