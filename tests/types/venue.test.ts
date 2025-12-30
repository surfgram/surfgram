import { Venue } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('Venue', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      location: {} as any,
      title: 'example text',
      address: 'example text',
      foursquare_id: 'example text',
      foursquare_type: 'example text',
      google_place_id: 'example text',
      google_place_type: 'example text',
    };

    const instance = new Venue(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.location ?? instance.raw?.location).toEqual({} as any);
    expect(instance.title ?? instance.raw?.title).toEqual('example text');
    expect(instance.address ?? instance.raw?.address).toEqual('example text');
    expect(instance.foursquareId ?? instance.raw?.foursquare_id).toEqual('example text');
    expect(instance.foursquareType ?? instance.raw?.foursquare_type).toEqual('example text');
    expect(instance.googlePlaceId ?? instance.raw?.google_place_id).toEqual('example text');
    expect(instance.googlePlaceType ?? instance.raw?.google_place_type).toEqual('example text');
  });
});
