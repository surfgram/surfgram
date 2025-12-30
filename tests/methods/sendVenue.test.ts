import { sendVenue } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('sendVenue', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      chatId: 123,
      latitude: 123,
      longitude: 123,
      title: "example text",
      address: "example text",
      businessConnectionId: "example text",
      messageThreadId: 123,
      directMessagesTopicId: 123,
      foursquareId: "example text",
      foursquareType: "example text",
      googlePlaceId: "example text",
      googlePlaceType: "example text",
      disableNotification: true,
      protectContent: true,
      allowPaidBroadcast: true,
      messageEffectId: "example text",
      suggestedPostParameters: {} as any,
      replyParameters: {} as any,
      replyMarkup: {} as any,
    };

    await sendVenue.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('sendVenue', {
      chat_id: 123,
      latitude: 123,
      longitude: 123,
      title: "example text",
      address: "example text",
      business_connection_id: "example text",
      message_thread_id: 123,
      direct_messages_topic_id: 123,
      foursquare_id: "example text",
      foursquare_type: "example text",
      google_place_id: "example text",
      google_place_type: "example text",
      disable_notification: true,
      protect_content: true,
      allow_paid_broadcast: true,
      message_effect_id: "example text",
      suggested_post_parameters: {} as any,
      reply_parameters: {} as any,
      reply_markup: {} as any,
    });
  });
});