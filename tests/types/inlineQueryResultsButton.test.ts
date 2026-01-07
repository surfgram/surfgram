import { InlineQueryResultsButton } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InlineQueryResultsButton', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      text: "example text",
      web_app: {} as any,
      start_parameter: "example text",
    };

    const instance = new InlineQueryResultsButton(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.text ?? instance.raw?.text).toEqual("example text");
    expect(instance.webApp ?? instance.raw?.web_app).toEqual({} as any);
    expect(instance.startParameter ?? instance.raw?.start_parameter).toEqual("example text");
  });
});