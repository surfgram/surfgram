import { MessageAutoDeleteTimerChanged } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('MessageAutoDeleteTimerChanged', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      message_auto_delete_time: 123,
    };

    const instance = new MessageAutoDeleteTimerChanged(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.messageAutoDeleteTime ?? instance.raw?.message_auto_delete_time).toEqual(123);
  });
});