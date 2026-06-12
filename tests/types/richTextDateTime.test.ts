import { RichTextDateTime } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('RichTextDateTime', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      text: {} as any,
      unix_time: 123,
      date_time_format: "example text",
    };

    const instance = new RichTextDateTime(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.text ?? instance.raw?.text).toEqual({} as any);
    expect(instance.unixTime ?? instance.raw?.unix_time).toEqual(123);
    expect(instance.dateTimeFormat ?? instance.raw?.date_time_format).toEqual("example text");
  });
});