import { BackgroundFillSolid } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('BackgroundFillSolid', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      color: 123,
    };

    const instance = new BackgroundFillSolid(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.color ?? instance.raw?.color).toEqual(123);
  });
});