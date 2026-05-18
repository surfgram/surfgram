import { InputMediaLocation } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InputMediaLocation', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      latitude: 123,
      longitude: 123,
      horizontal_accuracy: 123,
    };

    const instance = new InputMediaLocation(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.latitude ?? instance.raw?.latitude).toEqual(123);
    expect(instance.longitude ?? instance.raw?.longitude).toEqual(123);
    expect(instance.horizontalAccuracy ?? instance.raw?.horizontal_accuracy).toEqual(123);
  });
});