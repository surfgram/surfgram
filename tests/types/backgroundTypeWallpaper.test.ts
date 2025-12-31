import { BackgroundTypeWallpaper } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('BackgroundTypeWallpaper', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      document: {} as any,
      dark_theme_dimming: 123,
      is_blurred: true,
      is_moving: true,
    };

    const instance = new BackgroundTypeWallpaper(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.document ?? instance.raw?.document).toEqual({} as any);
    expect(instance.darkThemeDimming ?? instance.raw?.dark_theme_dimming).toEqual(123);
    expect(instance.isBlurred ?? instance.raw?.is_blurred).toEqual(true);
    expect(instance.isMoving ?? instance.raw?.is_moving).toEqual(true);
  });
});