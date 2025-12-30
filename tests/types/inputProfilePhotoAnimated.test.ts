import { InputProfilePhotoAnimated } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InputProfilePhotoAnimated', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: 'example text',
      animation: 'example text',
      main_frame_timestamp: 123,
    };

    const instance = new InputProfilePhotoAnimated(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.type ?? instance.raw?.type).toEqual('example text');
    expect(instance.animation ?? instance.raw?.animation).toEqual('example text');
    expect(instance.mainFrameTimestamp ?? instance.raw?.main_frame_timestamp).toEqual(123);
  });
});
