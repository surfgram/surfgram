import { sendInvoice } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('sendInvoice', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      chatId: 123,
      title: "example text",
      description: "example text",
      payload: "example text",
      currency: "example text",
      prices: [{} as any],
      messageThreadId: 123,
      directMessagesTopicId: 123,
      providerToken: "example text",
      maxTipAmount: 123,
      suggestedTipAmounts: [123],
      startParameter: "example text",
      providerData: "example text",
      photoUrl: "example text",
      photoSize: 123,
      photoWidth: 123,
      photoHeight: 123,
      needName: true,
      needPhoneNumber: true,
      needEmail: true,
      needShippingAddress: true,
      sendPhoneNumberToProvider: true,
      sendEmailToProvider: true,
      isFlexible: true,
      disableNotification: true,
      protectContent: true,
      allowPaidBroadcast: true,
      messageEffectId: "example text",
      suggestedPostParameters: {} as any,
      replyParameters: {} as any,
      replyMarkup: {} as any,
    };

    await sendInvoice.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('sendInvoice', {
      chat_id: 123,
      title: "example text",
      description: "example text",
      payload: "example text",
      currency: "example text",
      prices: [{} as any],
      message_thread_id: 123,
      direct_messages_topic_id: 123,
      provider_token: "example text",
      max_tip_amount: 123,
      suggested_tip_amounts: [123],
      start_parameter: "example text",
      provider_data: "example text",
      photo_url: "example text",
      photo_size: 123,
      photo_width: 123,
      photo_height: 123,
      need_name: true,
      need_phone_number: true,
      need_email: true,
      need_shipping_address: true,
      send_phone_number_to_provider: true,
      send_email_to_provider: true,
      is_flexible: true,
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