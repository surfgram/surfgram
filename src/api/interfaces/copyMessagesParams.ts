/**
 * Parameters interface for the copyMessages method
 * @interface CopyMessagesParams
 * @description Use this method to copy messages of any kind. If some of the specified messages can&#39;t be found or copied, they are skipped. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can&#39;t be copied. A quiz poll can be copied only if the value of the field correct\_option\_id is known to the bot. The method is analogous to the method forwardMessages, but the copied messages don&#39;t have a link to the original message. Album grouping is kept for copied messages. On success, an array of MessageId of the sent messages is returned.
 * @see {@link https://core.telegram.org/bots/api#copyMessages Telegram API Documentation}
 */

export interface CopyMessagesParams {
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
	 * A JSON-serialized list of 1-100 identifiers of messages in the chat from\_chat\_id to copy. The identifiers must be specified in a strictly increasing order.
	 * @type { number[] }
	 * @originalType Array of Integer
	 * @required Yes
	 */
	messageIds: number[];

	/**
	 * Unique identifier for the target message thread \(topic\) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only
	 * @type { number }
	 * @originalType Integer
	 * @required No
	 */
	messageThreadId?: number;

	/**
	 * Identifier of the direct messages topic to which the messages will be sent; required if the messages are sent to a direct messages chat
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
	 * Protects the contents of the sent messages from forwarding and saving
	 * @type { boolean }
	 * @originalType Boolean
	 * @required No
	 */
	protectContent?: boolean;

	/**
	 * Pass True to copy the messages without their captions
	 * @type { boolean }
	 * @originalType Boolean
	 * @required No
	 */
	removeCaption?: boolean;
}
