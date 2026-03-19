import { BackgroundFillFreeformGradient } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('BackgroundFillFreeformGradient', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      colors: [123],
    };

    const instance = new BackgroundFillFreeformGradient(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.colors ?? instance.raw?.colors).toEqual([123]);
  });
});