import { setStickerSetThumbnail } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('setStickerSetThumbnail', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await setStickerSetThumbnail.call(mockBot, "example text", 123, "example text", {} as any);

    expect(mockBot.callApi).toHaveBeenCalledWith('setStickerSetThumbnail', {
      name: "example text",
      user_id: 123,
      format: "example text",
      thumbnail: {} as any,
    });
  });
});