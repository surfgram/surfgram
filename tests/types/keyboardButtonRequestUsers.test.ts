import { KeyboardButtonRequestUsers } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('KeyboardButtonRequestUsers', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      request_id: 123,
      user_is_bot: true,
      user_is_premium: true,
      max_quantity: 123,
      request_name: true,
      request_username: true,
      request_photo: true,
    };

    const instance = new KeyboardButtonRequestUsers(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.requestId ?? instance.raw?.request_id).toEqual(123);
    expect(instance.userIsBot ?? instance.raw?.user_is_bot).toEqual(true);
    expect(instance.userIsPremium ?? instance.raw?.user_is_premium).toEqual(true);
    expect(instance.maxQuantity ?? instance.raw?.max_quantity).toEqual(123);
    expect(instance.requestName ?? instance.raw?.request_name).toEqual(true);
    expect(instance.requestUsername ?? instance.raw?.request_username).toEqual(true);
    expect(instance.requestPhoto ?? instance.raw?.request_photo).toEqual(true);
  });
});
