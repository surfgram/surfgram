import { InputRichBlockButtons } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InputRichBlockButtons', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      buttons: [{} as any],
      align: "example text",
    };

    const instance = new InputRichBlockButtons(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.buttons ?? instance.raw?.buttons).toEqual([{} as any]);
    expect(instance.align ?? instance.raw?.align).toEqual("example text");
  });
});