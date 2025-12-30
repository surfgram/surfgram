/**
 * Parameters interface for the forwardMessage method
 * @interface ForwardMessageParams
 * @description Use this method to forward messages of any kind. Service messages and messages with protected content can&#39;t be forwarded. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#forwardMessage Telegram API Documentation}
 */

import { SuggestedPostParameters } from '../types/suggestedPostParameters';

export interface ForwardMessageParams {
  /**
   * Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
   * @type { number | string }
   * @originalType Integer or String
   * @required Yes
   */
  chatId: number | string;

  /**
   * Unique identifier for the chat where the original message was sent \(or channel username in the format @channelusername\)
   * @type { number | string }
   * @originalType Integer or String
   * @required Yes
   */
  fromChatId: number | string;

  /**
   * Message identifier in the chat specified in from\_chat\_id
   * @type { number }
   * @originalType Integer
   * @required Yes
   */
  messageId: number;

  /**
   * Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only
   * @type { number }
   * @originalType Integer
   * @required No
   */
  messageThreadId?: number;

  /**
   * Identifier of the direct messages topic to which the message will be forwarded; required if the message is forwarded to a direct messages chat
   * @type { number }
   * @originalType Integer
   * @required No
   */
  directMessagesTopicId?: number;

  /**
   * New start timestamp for the forwarded video in the message
   * @type { number }
   * @originalType Integer
   * @required No
   */
  videoStartTimestamp?: number;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  disableNotification?: boolean;

  /**
   * Protects the contents of the forwarded message from forwarding and saving
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  protectContent?: boolean;

  /**
   * A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only
   * @type { SuggestedPostParameters }
   * @originalType SuggestedPostParameters
   * @required No
   */
  suggestedPostParameters?: SuggestedPostParameters;
}
