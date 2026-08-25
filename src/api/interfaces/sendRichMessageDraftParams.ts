/**
 * Parameters interface for the sendRichMessageDraft method
 * @interface SendRichMessageDraftParams
 * @description Use this method to stream a partial rich message to a user while the message is being generated. Note that the streamed draft is ephemeral and acts as a temporary 30-second preview - once the output is finalized, you must call sendRichMessage with the complete message to persist it in the user&#39;s chat. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#sendRichMessageDraft Telegram API Documentation}
 */

import { InputRichMessage } from '../types/inputRichMessage';

export interface SendRichMessageDraftParams {
  /**
   * Unique identifier for the target private chat
   * @type { number }
   * @originalType Integer
   * @required Yes
   */
  chatId: number;

  /**
   * Unique identifier of the message draft; must be non-zero. Changes to drafts with the same identifier are animated. Otherwise, the draft is replaced without animation.
   * @type { number }
   * @originalType Integer
   * @required Yes
   */
  draftId: number;

  /**
   * The partial message to be streamed. Direct upload of new files and explicit upload of files by a URL isn't supported.
   * @type { InputRichMessage }
   * @originalType InputRichMessage
   * @required Yes
   */
  richMessage: InputRichMessage;

  /**
   * Unique identifier for the target message thread
   * @type { number }
   * @originalType Integer
   * @required No
   */
  messageThreadId?: number;

  /**
   * Pass True to show the user a button to stop further drafts. The bot will receive an Update “stopped\_message\_generation” if the user presses the button.
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  canStop?: boolean;

  /**
   * Pass True to keep the draft in the chat when the button is pressed. The draft will still disappear after a short time or if the bot sends a message. To fully preserve the partial draft, the bot should send it as a new message.
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  keepOnStop?: boolean;

}
