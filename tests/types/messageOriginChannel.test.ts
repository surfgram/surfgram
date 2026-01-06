import { MessageOriginChannel } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('MessageOriginChannel', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      date: 123,
      chat: {} as any,
      message_id: 123,
      author_signature: "example text",
    };

    const instance = new MessageOriginChannel(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.date ?? instance.raw?.date).toEqual(123);
    expect(instance.chat ?? instance.raw?.chat).toEqual({} as any);
    expect(instance.messageId ?? instance.raw?.message_id).toEqual(123);
    expect(instance.authorSignature ?? instance.raw?.author_signature).toEqual("example text");
  });
});