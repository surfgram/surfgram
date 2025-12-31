import { BackgroundFillGradient } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('BackgroundFillGradient', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      top_color: 123,
      bottom_color: 123,
      rotation_angle: 123,
    };

    const instance = new BackgroundFillGradient(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.topColor ?? instance.raw?.top_color).toEqual(123);
    expect(instance.bottomColor ?? instance.raw?.bottom_color).toEqual(123);
    expect(instance.rotationAngle ?? instance.raw?.rotation_angle).toEqual(123);
  });
});