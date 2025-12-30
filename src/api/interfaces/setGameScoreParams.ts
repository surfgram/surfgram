/**
 * Parameters interface for the setGameScore method
 * @interface SetGameScoreParams
 * @description Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user&#39;s current score in the chat and force is False.
 * @see {@link https://core.telegram.org/bots/api#setGameScore Telegram API Documentation}
 */


export interface SetGameScoreParams {
  /**
   * User identifier
   * @type { number }
   * @originalType Integer
   * @required Yes
   */
  userId: number;

  /**
   * New score, must be non-negative
   * @type { number }
   * @originalType Integer
   * @required Yes
   */
  score: number;

  /**
   * Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  force?: boolean;

  /**
   * Pass True if the game message should not be automatically edited to include the current scoreboard
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  disableEditMessage?: boolean;

  /**
   * Required if inline\_message\_id is not specified. Unique identifier for the target chat
   * @type { number }
   * @originalType Integer
   * @required No
   */
  chatId?: number;

  /**
   * Required if inline\_message\_id is not specified. Identifier of the sent message
   * @type { number }
   * @originalType Integer
   * @required No
   */
  messageId?: number;

  /**
   * Required if chat\_id and message\_id are not specified. Identifier of the inline message
   * @type { string }
   * @originalType String
   * @required No
   */
  inlineMessageId?: string;

}
