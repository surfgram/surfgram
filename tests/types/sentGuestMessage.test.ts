import { SentGuestMessage } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('SentGuestMessage', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      inline_message_id: "example text",
    };

    const instance = new SentGuestMessage(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.inlineMessageId ?? instance.raw?.inline_message_id).toEqual("example text");
  });
});