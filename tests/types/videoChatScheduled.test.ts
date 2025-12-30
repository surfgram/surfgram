import { VideoChatScheduled } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('VideoChatScheduled', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      start_date: 123,
    };

    const instance = new VideoChatScheduled(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.startDate ?? instance.raw?.start_date).toEqual(123);
  });
});
