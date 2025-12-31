import { forwardMessage } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('forwardMessage', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      chatId: 123,
      fromChatId: 123,
      messageId: 123,
      messageThreadId: 123,
      directMessagesTopicId: 123,
      videoStartTimestamp: 123,
      disableNotification: true,
      protectContent: true,
      suggestedPostParameters: {} as any,
    };

    await forwardMessage.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('forwardMessage', {
      chat_id: 123,
      from_chat_id: 123,
      message_id: 123,
      message_thread_id: 123,
      direct_messages_topic_id: 123,
      video_start_timestamp: 123,
      disable_notification: true,
      protect_content: true,
      suggested_post_parameters: {} as any,
    });
  });
});