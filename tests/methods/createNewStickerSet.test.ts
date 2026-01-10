import { createNewStickerSet } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('createNewStickerSet', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      userId: 123,
      name: "example text",
      title: "example text",
      stickers: [{} as any],
      stickerType: "example text",
      needsRepainting: true,
    };

    await createNewStickerSet.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('createNewStickerSet', {
      user_id: 123,
      name: "example text",
      title: "example text",
      stickers: [{} as any],
      sticker_type: "example text",
      needs_repainting: true,
    });
  });
});