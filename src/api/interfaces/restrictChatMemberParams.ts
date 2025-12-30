/**
 * Parameters interface for the restrictChatMember method
 * @interface RestrictChatMemberParams
 * @description Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#restrictChatMember Telegram API Documentation}
 */

import { ChatPermissions } from '../types/chatPermissions';

export interface RestrictChatMemberParams {
  /**
   * Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\)
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
   * A JSON-serialized object for new user permissions
   * @type { ChatPermissions }
   * @originalType ChatPermissions
   * @required Yes
   */
  permissions: ChatPermissions;

  /**
   * Pass True if chat permissions are set independently. Otherwise, the can\_send\_other\_messages and can\_add\_web\_page\_previews permissions will imply the can\_send\_messages, can\_send\_audios, can\_send\_documents, can\_send\_photos, can\_send\_videos, can\_send\_video\_notes, and can\_send\_voice\_notes permissions; the can\_send\_polls permission will imply the can\_send\_messages permission.
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  useIndependentChatPermissions?: boolean;

  /**
   * Date when restrictions will be lifted for the user; Unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever
   * @type { number }
   * @originalType Integer
   * @required No
   */
  untilDate?: number;
}
