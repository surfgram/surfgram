/**
 * Parameters interface for the replaceStickerInSet method
 * @interface ReplaceStickerInSetParams
 * @description Use this method to replace an existing sticker in a sticker set with a new one. The method is equivalent to calling deleteStickerFromSet, then addStickerToSet, then setStickerPositionInSet. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#replaceStickerInSet Telegram API Documentation}
 */

import { InputSticker } from '../types/inputSticker';

export interface ReplaceStickerInSetParams {
  /**
   * User identifier of the sticker set owner
   * @type { number }
   * @originalType Integer
   * @required Yes
   */
  userId: number;

  /**
   * Sticker set name
   * @type { string }
   * @originalType String
   * @required Yes
   */
  name: string;

  /**
   * File identifier of the replaced sticker
   * @type { string }
   * @originalType String
   * @required Yes
   */
  oldSticker: string;

  /**
   * A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set remains unchanged.
   * @type { InputSticker }
   * @originalType InputSticker
   * @required Yes
   */
  sticker: InputSticker;

}
