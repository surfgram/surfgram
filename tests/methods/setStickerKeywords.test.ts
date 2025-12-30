import { setStickerKeywords } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('setStickerKeywords', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await setStickerKeywords.call(mockBot, 'example text', ['example text']);

    expect(mockBot.callApi).toHaveBeenCalledWith('setStickerKeywords', {
      sticker: 'example text',
      keywords: ['example text'],
    });
  });
});
