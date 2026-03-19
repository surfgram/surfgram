import { ReplyKeyboardRemove } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('ReplyKeyboardRemove', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      remove_keyboard: true,
      selective: true,
    };

    const instance = new ReplyKeyboardRemove(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.removeKeyboard ?? instance.raw?.remove_keyboard).toEqual(true);
    expect(instance.selective ?? instance.raw?.selective).toEqual(true);
  });
});