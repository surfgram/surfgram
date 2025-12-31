import { BackgroundTypePattern } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('BackgroundTypePattern', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: 'example text',
      document: {} as any,
      fill: {} as any,
      intensity: 123,
      is_inverted: true,
      is_moving: true,
    };

    const instance = new BackgroundTypePattern(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.type ?? instance.raw?.type).toEqual('example text');
    expect(instance.document ?? instance.raw?.document).toEqual({} as any);
    expect(instance.fill ?? instance.raw?.fill).toEqual({} as any);
    expect(instance.intensity ?? instance.raw?.intensity).toEqual(123);
    expect(instance.isInverted ?? instance.raw?.is_inverted).toEqual(true);
    expect(instance.isMoving ?? instance.raw?.is_moving).toEqual(true);
  });
});
