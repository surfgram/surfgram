import { MessageOrigin } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('MessageOrigin', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      date: 123,
      sender_user: {} as any,
    };

    const instance = new MessageOrigin(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.date ?? instance.raw?.date).toEqual(123);
    expect(instance.senderUser ?? instance.raw?.sender_user).toEqual({} as any);
  });
});