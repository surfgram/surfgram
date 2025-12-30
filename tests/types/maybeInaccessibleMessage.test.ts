import { MaybeInaccessibleMessage } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('MaybeInaccessibleMessage', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: 'example text',
      offset: 123,
      length: 123,
      url: 'example text',
      user: {} as any,
      language: 'example text',
      custom_emoji_id: 'example text',
    };

    const instance = new MaybeInaccessibleMessage(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.type ?? instance.raw?.type).toEqual('example text');
    expect(instance.offset ?? instance.raw?.offset).toEqual(123);
    expect(instance.length ?? instance.raw?.length).toEqual(123);
    expect(instance.url ?? instance.raw?.url).toEqual('example text');
    expect(instance.user ?? instance.raw?.user).toEqual({} as any);
    expect(instance.language ?? instance.raw?.language).toEqual('example text');
    expect(instance.customEmojiId ?? instance.raw?.custom_emoji_id).toEqual('example text');
  });
});
