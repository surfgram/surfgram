import { InaccessibleMessage } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InaccessibleMessage', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      chat: {} as any,
      message_id: 123,
      date: 123,
    };

    const instance = new InaccessibleMessage(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.chat ?? instance.raw?.chat).toEqual({} as any);
    expect(instance.messageId ?? instance.raw?.message_id).toEqual(123);
    expect(instance.date ?? instance.raw?.date).toEqual(123);
  });
});