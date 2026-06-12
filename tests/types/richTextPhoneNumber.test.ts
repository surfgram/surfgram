import { RichTextPhoneNumber } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('RichTextPhoneNumber', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      text: {} as any,
      phone_number: "example text",
    };

    const instance = new RichTextPhoneNumber(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.text ?? instance.raw?.text).toEqual({} as any);
    expect(instance.phoneNumber ?? instance.raw?.phone_number).toEqual("example text");
  });
});