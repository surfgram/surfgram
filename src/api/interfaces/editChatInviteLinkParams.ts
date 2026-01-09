/**
 * Parameters interface for the editChatInviteLink method
 * @interface EditChatInviteLinkParams
 * @description Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object.
 * @see {@link https://core.telegram.org/bots/api#editChatInviteLink Telegram API Documentation}
 */


export interface EditChatInviteLinkParams {
  /**
   * Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
   * @type { number | string }
   * @originalType Integer or String
   * @required Yes
   */
  chatId: number | string;

  /**
   * The invite link to edit
   * @type { string }
   * @originalType String
   * @required Yes
   */
  inviteLink: string;

  /**
   * Invite link name; 0-32 characters
   * @type { string }
   * @originalType String
   * @required No
   */
  name?: string;

  /**
   * Point in time \(Unix timestamp\) when the link will expire
   * @type { number }
   * @originalType Integer
   * @required No
   */
  expireDate?: number;

  /**
   * The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
   * @type { number }
   * @originalType Integer
   * @required No
   */
  memberLimit?: number;

  /**
   * True, if users joining the chat via the link need to be approved by chat administrators. If True, member\_limit can't be specified
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  createsJoinRequest?: boolean;

}
