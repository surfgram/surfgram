import { getStickerSet } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('getStickerSet', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await getStickerSet.call(mockBot, "example text");

    expect(mockBot.callApi).toHaveBeenCalledWith('getStickerSet', {
      name: "example text",
    });
  });
});