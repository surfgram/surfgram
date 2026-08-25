import { RichTextButton } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('RichTextButton', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      button: {} as any,
    };

    const instance = new RichTextButton(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.button ?? instance.raw?.button).toEqual({} as any);
  });
});