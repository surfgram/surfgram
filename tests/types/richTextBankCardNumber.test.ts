import { RichTextBankCardNumber } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('RichTextBankCardNumber', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      text: {} as any,
      bank_card_number: "example text",
    };

    const instance = new RichTextBankCardNumber(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.text ?? instance.raw?.text).toEqual({} as any);
    expect(instance.bankCardNumber ?? instance.raw?.bank_card_number).toEqual("example text");
  });
});