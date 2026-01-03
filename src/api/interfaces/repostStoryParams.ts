/**
 * Parameters interface for the repostStory method
 * @interface RepostStoryParams
 * @description Reposts a story on behalf of a business account from another business account. Both business accounts must be managed by the same bot, and the story on the source account must have been posted \(or reposted\) by the bot. Requires the can\_manage\_stories business bot right for both business accounts. Returns Story on success.
 * @see {@link https://core.telegram.org/bots/api#repostStory Telegram API Documentation}
 */


export interface RepostStoryParams {
  /**
   * Unique identifier of the business connection
   * @type { string }
   * @originalType String
   * @required Yes
   */
  businessConnectionId: string;

  /**
   * Unique identifier of the chat which posted the story that should be reposted
   * @type { number }
   * @originalType Integer
   * @required Yes
   */
  fromChatId: number;

  /**
   * Unique identifier of the story that should be reposted
   * @type { number }
   * @originalType Integer
   * @required Yes
   */
  fromStoryId: number;

  /**
   * Period after which the story is moved to the archive, in seconds; must be one of 6 \* 3600, 12 \* 3600, 86400, or 2 \* 86400
   * @type { number }
   * @originalType Integer
   * @required Yes
   */
  activePeriod: number;

  /**
   * Pass True to keep the story accessible after it expires
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  postToChatPage?: boolean;

  /**
   * Pass True if the content of the story must be protected from forwarding and screenshotting
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  protectContent?: boolean;

}
