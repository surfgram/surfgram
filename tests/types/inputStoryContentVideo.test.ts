import { InputStoryContentVideo } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InputStoryContentVideo', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: 'example text',
      video: 'example text',
      duration: 123,
      cover_frame_timestamp: 123,
      is_animation: true,
    };

    const instance = new InputStoryContentVideo(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.type ?? instance.raw?.type).toEqual('example text');
    expect(instance.video ?? instance.raw?.video).toEqual('example text');
    expect(instance.duration ?? instance.raw?.duration).toEqual(123);
    expect(instance.coverFrameTimestamp ?? instance.raw?.cover_frame_timestamp).toEqual(123);
    expect(instance.isAnimation ?? instance.raw?.is_animation).toEqual(true);
  });
});
