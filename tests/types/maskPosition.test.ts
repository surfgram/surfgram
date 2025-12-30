import { MaskPosition } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('MaskPosition', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      point: 'example text',
      x_shift: 123,
      y_shift: 123,
      scale: 123,
    };

    const instance = new MaskPosition(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.point ?? instance.raw?.point).toEqual('example text');
    expect(instance.xShift ?? instance.raw?.x_shift).toEqual(123);
    expect(instance.yShift ?? instance.raw?.y_shift).toEqual(123);
    expect(instance.scale ?? instance.raw?.scale).toEqual(123);
  });
});
