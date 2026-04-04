/**
 * Parameters interface for the sendPoll method
 * @interface SendPollParams
 * @description Use this method to send a native poll. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendPoll Telegram API Documentation}
 */

import { InputPollOption } from '../types/inputPollOption';
import { MessageEntity } from '../types/messageEntity';
import { ReplyParameters } from '../types/replyParameters';
import { InlineKeyboardMarkup } from '../types/inlineKeyboardMarkup';
import { ReplyKeyboardMarkup } from '../types/replyKeyboardMarkup';
import { ReplyKeyboardRemove } from '../types/replyKeyboardRemove';
import { ForceReply } from '../types/forceReply';

export interface SendPollParams {
  /**
   * Unique identifier for the target chat or username of the target channel \(in the format @channelusername\). Polls can't be sent to channel direct messages chats.
   * @type { number | string }
   * @originalType Integer or String
   * @required Yes
   */
  chatId: number | string;

  /**
   * Poll question, 1-300 characters
   * @type { string }
   * @originalType String
   * @required Yes
   */
  question: string;

  /**
   * A JSON-serialized list of 2-12 answer options
   * @type { InputPollOption[] }
   * @originalType Array of InputPollOption
   * @required Yes
   */
  options: InputPollOption[];

  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   * @type { string }
   * @originalType String
   * @required No
   */
  businessConnectionId?: string;

  /**
   * Unique identifier for the target message thread \(topic\) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only
   * @type { number }
   * @originalType Integer
   * @required No
   */
  messageThreadId?: number;

  /**
   * Mode for parsing entities in the question. See formatting options for more details. Currently, only custom emoji entities are allowed
   * @type { string }
   * @originalType String
   * @required No
   */
  questionParseMode?: string;

  /**
   * A JSON-serialized list of special entities that appear in the poll question. It can be specified instead of question\_parse\_mode
   * @type { MessageEntity[] }
   * @originalType Array of MessageEntity
   * @required No
   */
  questionEntities?: MessageEntity[];

  /**
   * True, if the poll needs to be anonymous, defaults to True
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  isAnonymous?: boolean;

  /**
   * Poll type, “quiz” or “regular”, defaults to “regular”
   * @type { string }
   * @originalType String
   * @required No
   */
  type?: string;

  /**
   * Pass True, if the poll allows multiple answers, defaults to False
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  allowsMultipleAnswers?: boolean;

  /**
   * Pass True, if the poll allows to change chosen answer options, defaults to False for quizzes and to True for regular polls
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  allowsRevoting?: boolean;

  /**
   * Pass True, if the poll options must be shown in random order
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  shuffleOptions?: boolean;

  /**
   * Pass True, if answer options can be added to the poll after creation; not supported for anonymous polls and quizzes
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  allowAddingOptions?: boolean;

  /**
   * Pass True, if poll results must be shown only after the poll closes
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  hideResultsUntilCloses?: boolean;

  /**
   * A JSON-serialized list of monotonically increasing 0-based identifiers of the correct answer options, required for polls in quiz mode
   * @type { number[] }
   * @originalType Array of Integer
   * @required No
   */
  correctOptionIds?: number[];

  /**
   * Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing
   * @type { string }
   * @originalType String
   * @required No
   */
  explanation?: string;

  /**
   * Mode for parsing entities in the explanation. See formatting options for more details.
   * @type { string }
   * @originalType String
   * @required No
   */
  explanationParseMode?: string;

  /**
   * A JSON-serialized list of special entities that appear in the poll explanation. It can be specified instead of explanation\_parse\_mode
   * @type { MessageEntity[] }
   * @originalType Array of MessageEntity
   * @required No
   */
  explanationEntities?: MessageEntity[];

  /**
   * Amount of time in seconds the poll will be active after creation, 5-2628000. Can't be used together with close\_date.
   * @type { number }
   * @originalType Integer
   * @required No
   */
  openPeriod?: number;

  /**
   * Point in time \(Unix timestamp\) when the poll will be automatically closed. Must be at least 5 and no more than 2628000 seconds in the future. Can't be used together with open\_period.
   * @type { number }
   * @originalType Integer
   * @required No
   */
  closeDate?: number;

  /**
   * Pass True if the poll needs to be immediately closed. This can be useful for poll preview.
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  isClosed?: boolean;

  /**
   * Description of the poll to be sent, 0-1024 characters after entities parsing
   * @type { string }
   * @originalType String
   * @required No
   */
  description?: string;

  /**
   * Mode for parsing entities in the poll description. See formatting options for more details.
   * @type { string }
   * @originalType String
   * @required No
   */
  descriptionParseMode?: string;

  /**
   * A JSON-serialized list of special entities that appear in the poll description, which can be specified instead of description\_parse\_mode
   * @type { MessageEntity[] }
   * @originalType Array of MessageEntity
   * @required No
   */
  descriptionEntities?: MessageEntity[];

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  disableNotification?: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  protectContent?: boolean;

  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  allowPaidBroadcast?: boolean;

  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   * @type { string }
   * @originalType String
   * @required No
   */
  messageEffectId?: string;

  /**
   * Description of the message to reply to
   * @type { ReplyParameters }
   * @originalType ReplyParameters
   * @required No
   */
  replyParameters?: ReplyParameters;

  /**
   * Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
   * @type { InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply }
   * @originalType InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply
   * @required No
   */
  replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;

}
