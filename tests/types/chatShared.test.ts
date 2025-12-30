import { ChatShared } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('ChatShared', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      request_id: 123,
      chat_id: 123,
      title: 'example text',
      username: 'example text',
      photo: [{} as any],
    };

    const instance = new ChatShared(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.requestId ?? instance.raw?.request_id).toEqual(123);
    expect(instance.chatId ?? instance.raw?.chat_id).toEqual(123);
    expect(instance.title ?? instance.raw?.title).toEqual('example text');
    expect(instance.username ?? instance.raw?.username).toEqual('example text');
    expect(instance.photo ?? instance.raw?.photo).toEqual([{} as any]);
  });
});
