import { replaceStickerInSet } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('replaceStickerInSet', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      userId: 123,
      name: 'example text',
      oldSticker: 'example text',
      sticker: {} as any,
    };

    await replaceStickerInSet.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('replaceStickerInSet', {
      user_id: 123,
      name: 'example text',
      old_sticker: 'example text',
      sticker: {} as any,
    });
  });
});
