import { StoryAreaPosition } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('StoryAreaPosition', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      x_percentage: 123,
      y_percentage: 123,
      width_percentage: 123,
      height_percentage: 123,
      rotation_angle: 123,
      corner_radius_percentage: 123,
    };

    const instance = new StoryAreaPosition(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.xPercentage ?? instance.raw?.x_percentage).toEqual(123);
    expect(instance.yPercentage ?? instance.raw?.y_percentage).toEqual(123);
    expect(instance.widthPercentage ?? instance.raw?.width_percentage).toEqual(123);
    expect(instance.heightPercentage ?? instance.raw?.height_percentage).toEqual(123);
    expect(instance.rotationAngle ?? instance.raw?.rotation_angle).toEqual(123);
    expect(instance.cornerRadiusPercentage ?? instance.raw?.corner_radius_percentage).toEqual(123);
  });
});
