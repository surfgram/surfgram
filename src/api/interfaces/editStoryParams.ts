/**
 * Parameters interface for the editStory method
 * @interface EditStoryParams
 * @description Edits a story previously posted by the bot on behalf of a managed business account. Requires the can\_manage\_stories business bot right. Returns Story on success.
 * @see {@link https://core.telegram.org/bots/api#editStory Telegram API Documentation}
 */

import { InputStoryContent } from '../types/inputStoryContent';
import { MessageEntity } from '../types/messageEntity';
import { StoryArea } from '../types/storyArea';

export interface EditStoryParams {
  /**
   * Unique identifier of the business connection
   * @type { string }
   * @originalType String
   * @required Yes
   */
  businessConnectionId: string;

  /**
   * Unique identifier of the story to edit
   * @type { number }
   * @originalType Integer
   * @required Yes
   */
  storyId: number;

  /**
   * Content of the story
   * @type { InputStoryContent }
   * @originalType InputStoryContent
   * @required Yes
   */
  content: InputStoryContent;

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

}
