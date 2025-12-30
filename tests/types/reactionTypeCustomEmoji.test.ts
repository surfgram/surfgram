import { ReactionTypeCustomEmoji } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('ReactionTypeCustomEmoji', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: 'example text',
      custom_emoji_id: 'example text',
    };

    const instance = new ReactionTypeCustomEmoji(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.type ?? instance.raw?.type).toEqual('example text');
    expect(instance.customEmojiId ?? instance.raw?.custom_emoji_id).toEqual('example text');
  });
});
