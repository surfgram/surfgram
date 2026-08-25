import { EphemeralMessageParameters } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('EphemeralMessageParameters', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      receiver_user_id: 123,
      callback_query_id: "example text",
      replace_callback_query_message: true,
    };

    const instance = new EphemeralMessageParameters(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.receiverUserId ?? instance.raw?.receiver_user_id).toEqual(123);
    expect(instance.callbackQueryId ?? instance.raw?.callback_query_id).toEqual("example text");
    expect(instance.replaceCallbackQueryMessage ?? instance.raw?.replace_callback_query_message).toEqual(true);
  });
});