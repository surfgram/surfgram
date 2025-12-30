import { TextQuote } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('TextQuote', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      text: "example text",
      entities: [{} as any],
      position: 123,
      is_manual: true,
    };

    const instance = new TextQuote(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.text ?? instance.raw?.text).toEqual("example text");
    expect(instance.entities ?? instance.raw?.entities).toEqual([{} as any]);
    expect(instance.position ?? instance.raw?.position).toEqual(123);
    expect(instance.isManual ?? instance.raw?.is_manual).toEqual(true);
  });
});