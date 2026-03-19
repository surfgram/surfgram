import { deleteChatStickerSet } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('deleteChatStickerSet', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await deleteChatStickerSet.call(mockBot, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('deleteChatStickerSet', {
      chat_id: 123,
    });
  });
});