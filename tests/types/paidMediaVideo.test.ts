import { PaidMediaVideo } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('PaidMediaVideo', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: 'example text',
      video: {} as any,
    };

    const instance = new PaidMediaVideo(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.type ?? instance.raw?.type).toEqual('example text');
    expect(instance.video ?? instance.raw?.video).toEqual({} as any);
  });
});
