import { InlineQueryResultLocation } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InlineQueryResultLocation', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: 'example text',
      id: 'example text',
      latitude: 123,
      longitude: 123,
      title: 'example text',
      horizontal_accuracy: 123,
      live_period: 123,
      heading: 123,
      proximity_alert_radius: 123,
      reply_markup: {} as any,
      input_message_content: {} as any,
      thumbnail_url: 'example text',
      thumbnail_width: 123,
      thumbnail_height: 123,
    };

    const instance = new InlineQueryResultLocation(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.type ?? instance.raw?.type).toEqual('example text');
    expect(instance.id ?? instance.raw?.id).toEqual('example text');
    expect(instance.latitude ?? instance.raw?.latitude).toEqual(123);
    expect(instance.longitude ?? instance.raw?.longitude).toEqual(123);
    expect(instance.title ?? instance.raw?.title).toEqual('example text');
    expect(instance.horizontalAccuracy ?? instance.raw?.horizontal_accuracy).toEqual(123);
    expect(instance.livePeriod ?? instance.raw?.live_period).toEqual(123);
    expect(instance.heading ?? instance.raw?.heading).toEqual(123);
    expect(instance.proximityAlertRadius ?? instance.raw?.proximity_alert_radius).toEqual(123);
    expect(instance.replyMarkup ?? instance.raw?.reply_markup).toEqual({} as any);
    expect(instance.inputMessageContent ?? instance.raw?.input_message_content).toEqual({} as any);
    expect(instance.thumbnailUrl ?? instance.raw?.thumbnail_url).toEqual('example text');
    expect(instance.thumbnailWidth ?? instance.raw?.thumbnail_width).toEqual(123);
    expect(instance.thumbnailHeight ?? instance.raw?.thumbnail_height).toEqual(123);
  });
});
