import { setChatStickerSet } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('setChatStickerSet', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await setChatStickerSet.call(mockBot, 123, 'example text');

    expect(mockBot.callApi).toHaveBeenCalledWith('setChatStickerSet', {
      chat_id: 123,
      sticker_set_name: 'example text',
    });
  });
});
