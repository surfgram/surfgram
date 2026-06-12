import { sendRichMessageDraft } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('sendRichMessageDraft', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await sendRichMessageDraft.call(mockBot, 123, 123, {} as any, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('sendRichMessageDraft', {
      chat_id: 123,
      draft_id: 123,
      rich_message: {} as any,
      message_thread_id: 123,
    });
  });
});