import { WebAppData } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('WebAppData', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      data: "example text",
      button_text: "example text",
    };

    const instance = new WebAppData(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.data ?? instance.raw?.data).toEqual("example text");
    expect(instance.buttonText ?? instance.raw?.button_text).toEqual("example text");
  });
});