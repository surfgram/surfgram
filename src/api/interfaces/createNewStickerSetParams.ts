/**
 * Parameters interface for the createNewStickerSet method
 * @interface CreateNewStickerSetParams
 * @description Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#createNewStickerSet Telegram API Documentation}
 */

import { InputSticker } from '../types/inputSticker';

export interface CreateNewStickerSetParams {
  /**
   * User identifier of created sticker set owner
   * @type { number }
   * @originalType Integer
   * @required Yes
   */
  userId: number;

  /**
   * Short name of sticker set, to be used in t.me/addstickers/ URLs \(e.g., animals\). Can contain only English letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in "\_by\_&lt;bot\_username&gt;". &lt;bot\_username&gt; is case insensitive. 1-64 characters.
   * @type { string }
   * @originalType String
   * @required Yes
   */
  name: string;

  /**
   * Sticker set title, 1-64 characters
   * @type { string }
   * @originalType String
   * @required Yes
   */
  title: string;

  /**
   * A JSON-serialized list of 1-50 initial stickers to be added to the sticker set
   * @type { InputSticker[] }
   * @originalType Array of InputSticker
   * @required Yes
   */
  stickers: InputSticker[];

  /**
   * Type of stickers in the set, pass “regular”, “mask”, or “custom\_emoji”. By default, a regular sticker set is created.
   * @type { string }
   * @originalType String
   * @required No
   */
  stickerType?: string;

  /**
   * Pass True if stickers in the sticker set must be repainted to the color of text when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context; for custom emoji sticker sets only
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  needsRepainting?: boolean;
}
