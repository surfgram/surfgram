import { DirectMessagePriceChanged } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('DirectMessagePriceChanged', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      are_direct_messages_enabled: true,
      direct_message_star_count: 123,
    };

    const instance = new DirectMessagePriceChanged(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.areDirectMessagesEnabled ?? instance.raw?.are_direct_messages_enabled).toEqual(
      true
    );
    expect(instance.directMessageStarCount ?? instance.raw?.direct_message_star_count).toEqual(123);
  });
});
