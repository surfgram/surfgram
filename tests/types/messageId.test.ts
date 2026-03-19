import { MessageId } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('MessageId', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      message_id: 123,
    };

    const instance = new MessageId(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.messageId ?? instance.raw?.message_id).toEqual(123);
  });
});