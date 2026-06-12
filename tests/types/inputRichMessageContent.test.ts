import { InputRichMessageContent } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InputRichMessageContent', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      rich_message: {} as any,
    };

    const instance = new InputRichMessageContent(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.richMessage ?? instance.raw?.rich_message).toEqual({} as any);
  });
});