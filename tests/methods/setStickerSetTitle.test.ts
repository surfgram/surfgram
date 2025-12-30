import { setStickerSetTitle } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('setStickerSetTitle', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await setStickerSetTitle.call(mockBot, 'example text', 'example text');

    expect(mockBot.callApi).toHaveBeenCalledWith('setStickerSetTitle', {
      name: 'example text',
      title: 'example text',
    });
  });
});
