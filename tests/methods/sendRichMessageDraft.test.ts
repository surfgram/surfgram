import { sendRichMessageDraft } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('sendRichMessageDraft', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      chatId: 123,
      draftId: 123,
      richMessage: {} as any,
      messageThreadId: 123,
      canStop: true,
      keepOnStop: true,
    };

    await sendRichMessageDraft.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('sendRichMessageDraft', {
      chat_id: 123,
      draft_id: 123,
      rich_message: {} as any,
      message_thread_id: 123,
      can_stop: true,
      keep_on_stop: true,
    });
  });
});