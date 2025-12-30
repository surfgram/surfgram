/**
 * Parameters interface for the postStory method
 * @interface PostStoryParams
 * @description Posts a story on behalf of a managed business account. Requires the can\_manage\_stories business bot right. Returns Story on success.
 * @see {@link https://core.telegram.org/bots/api#postStory Telegram API Documentation}
 */

import { InputStoryContent } from '../types/inputStoryContent';
import { MessageEntity } from '../types/messageEntity';
import { StoryArea } from '../types/storyArea';

export interface PostStoryParams {
  /**
   * Unique identifier of the business connection
   * @type { string }
   * @originalType String
   * @required Yes
   */
  businessConnectionId: string;

  /**
   * Content of the story
   * @type { InputStoryContent }
   * @originalType InputStoryContent
   * @required Yes
   */
  content: InputStoryContent;

  /**
   * Period after which the story is moved to the archive, in seconds; must be one of 6 \* 3600, 12 \* 3600, 86400, or 2 \* 86400
   * @type { number }
   * @originalType Integer
   * @required Yes
   */
  activePeriod: number;

  /**
   * Caption of the story, 0-2048 characters after entities parsing
   * @type { string }
   * @originalType String
   * @required No
   */
  caption?: string;

  /**
   * Mode for parsing entities in the story caption. See formatting options for more details.
   * @type { string }
   * @originalType String
   * @required No
   */
  parseMode?: string;

  /**
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse\_mode
   * @type { MessageEntity[] }
   * @originalType Array of MessageEntity
   * @required No
   */
  captionEntities?: MessageEntity[];

  /**
   * A JSON-serialized list of clickable areas to be shown on the story
   * @type { StoryArea[] }
   * @originalType Array of StoryArea
   * @required No
   */
  areas?: StoryArea[];

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
