import { sendChecklist } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('sendChecklist', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      businessConnectionId: "example text",
      chatId: 123,
      checklist: {} as any,
      disableNotification: true,
      protectContent: true,
      messageEffectId: "example text",
      replyParameters: {} as any,
      replyMarkup: {} as any,
    };

    await sendChecklist.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('sendChecklist', {
      business_connection_id: "example text",
      chat_id: 123,
      checklist: {} as any,
      disable_notification: true,
      protect_content: true,
      message_effect_id: "example text",
      reply_parameters: {} as any,
      reply_markup: {} as any,
    });
  });
});