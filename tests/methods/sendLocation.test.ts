import { sendLocation } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('sendLocation', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      chatId: 123,
      latitude: 123,
      longitude: 123,
      businessConnectionId: 'example text',
      messageThreadId: 123,
      directMessagesTopicId: 123,
      horizontalAccuracy: 123,
      livePeriod: 123,
      heading: 123,
      proximityAlertRadius: 123,
      disableNotification: true,
      protectContent: true,
      allowPaidBroadcast: true,
      messageEffectId: 'example text',
      suggestedPostParameters: {} as any,
      replyParameters: {} as any,
      replyMarkup: {} as any,
    };

    await sendLocation.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('sendLocation', {
      chat_id: 123,
      latitude: 123,
      longitude: 123,
      business_connection_id: 'example text',
      message_thread_id: 123,
      direct_messages_topic_id: 123,
      horizontal_accuracy: 123,
      live_period: 123,
      heading: 123,
      proximity_alert_radius: 123,
      disable_notification: true,
      protect_content: true,
      allow_paid_broadcast: true,
      message_effect_id: 'example text',
      suggested_post_parameters: {} as any,
      reply_parameters: {} as any,
      reply_markup: {} as any,
    });
  });
});
