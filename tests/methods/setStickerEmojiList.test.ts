import { setStickerEmojiList } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('setStickerEmojiList', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await setStickerEmojiList.call(mockBot, "example text", ["example text"]);

    expect(mockBot.callApi).toHaveBeenCalledWith('setStickerEmojiList', {
      sticker: "example text",
      emoji_list: ["example text"],
    });
  });
});