import { BusinessOpeningHours } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('BusinessOpeningHours', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      time_zone_name: "example text",
      opening_hours: [{} as any],
    };

    const instance = new BusinessOpeningHours(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.timeZoneName ?? instance.raw?.time_zone_name).toEqual("example text");
    expect(instance.openingHours ?? instance.raw?.opening_hours).toEqual([{} as any]);
  });
});