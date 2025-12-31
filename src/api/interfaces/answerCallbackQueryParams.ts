/**
 * Parameters interface for the answerCallbackQuery method
 * @interface AnswerCallbackQueryParams
 * @description Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.
 * @see {@link https://core.telegram.org/bots/api#answerCallbackQuery Telegram API Documentation}
 */


export interface AnswerCallbackQueryParams {
  /**
   * Unique identifier for the query to be answered
   * @type { string }
   * @originalType String
   * @required Yes
   */
  callbackQueryId: string;

  /**
   * Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters
   * @type { string }
   * @originalType String
   * @required No
   */
  text?: string;

  /**
   * If True, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false.
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  showAlert?: boolean;

  /**
   * URL that will be opened by the user's client. If you have created a Game and accepted the conditions via @BotFather, specify the URL that opens your game - note that this will only work if the query comes from a callback\_game button.Otherwise, you may use links like t.me/your\_bot?start=XXXX that open your bot with a parameter.
   * @type { string }
   * @originalType String
   * @required No
   */
  url?: string;

  /**
   * The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0.
   * @type { number }
   * @originalType Integer
   * @required No
   */
  cacheTime?: number;

}
