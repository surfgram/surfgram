import { setStickerPositionInSet } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('setStickerPositionInSet', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await setStickerPositionInSet.call(mockBot, "example text", 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('setStickerPositionInSet', {
      sticker: "example text",
      position: 123,
    });
  });
});