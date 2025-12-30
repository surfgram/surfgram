import { editMessageLiveLocation } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('editMessageLiveLocation', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      latitude: 123,
      longitude: 123,
      businessConnectionId: "example text",
      chatId: 123,
      messageId: 123,
      inlineMessageId: "example text",
      livePeriod: 123,
      horizontalAccuracy: 123,
      heading: 123,
      proximityAlertRadius: 123,
      replyMarkup: {} as any,
    };

    await editMessageLiveLocation.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('editMessageLiveLocation', {
      latitude: 123,
      longitude: 123,
      business_connection_id: "example text",
      chat_id: 123,
      message_id: 123,
      inline_message_id: "example text",
      live_period: 123,
      horizontal_accuracy: 123,
      heading: 123,
      proximity_alert_radius: 123,
      reply_markup: {} as any,
    });
  });
});