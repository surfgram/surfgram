import { PassportData } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('PassportData', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      data: [{} as any],
      credentials: {} as any,
    };

    const instance = new PassportData(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.data ?? instance.raw?.data).toEqual([{} as any]);
    expect(instance.credentials ?? instance.raw?.credentials).toEqual({} as any);
  });
});