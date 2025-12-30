/**
 * Parameters interface for the forwardMessages method
 * @interface ForwardMessagesParams
 * @description Use this method to forward multiple messages of any kind. If some of the specified messages can&#39;t be found or forwarded, they are skipped. Service messages and messages with protected content can&#39;t be forwarded. Album grouping is kept for forwarded messages. On success, an array of MessageId of the sent messages is returned.
 * @see {@link https://core.telegram.org/bots/api#forwardMessages Telegram API Documentation}
 */

export interface ForwardMessagesParams {
  /**
   * Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
   * @type { number | string }
   * @originalType Integer or String
   * @required Yes
   */
  chatId: number | string;

  /**
   * Unique identifier for the chat where the original messages were sent \(or channel username in the format @channelusername\)
   * @type { number | string }
   * @originalType Integer or String
   * @required Yes
   */
  fromChatId: number | string;

  /**
   * A JSON-serialized list of 1-100 identifiers of messages in the chat from\_chat\_id to forward. The identifiers must be specified in a strictly increasing order.
   * @type { number[] }
   * @originalType Array of Integer
   * @required Yes
   */
  messageIds: number[];

  /**
   * Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only
   * @type { number }
   * @originalType Integer
   * @required No
   */
  messageThreadId?: number;

  /**
   * Identifier of the direct messages topic to which the messages will be forwarded; required if the messages are forwarded to a direct messages chat
   * @type { number }
   * @originalType Integer
   * @required No
   */
  directMessagesTopicId?: number;

  /**
   * Sends the messages silently. Users will receive a notification with no sound.
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  disableNotification?: boolean;

  /**
   * Protects the contents of the forwarded messages from forwarding and saving
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  protectContent?: boolean;
}
