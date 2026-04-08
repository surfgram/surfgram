import { deleteStickerFromSet } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('deleteStickerFromSet', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await deleteStickerFromSet.call(mockBot, "example text");

    expect(mockBot.callApi).toHaveBeenCalledWith('deleteStickerFromSet', {
      sticker: "example text",
    });
  });
});