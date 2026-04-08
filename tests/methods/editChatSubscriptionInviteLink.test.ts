import { editChatSubscriptionInviteLink } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('editChatSubscriptionInviteLink', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await editChatSubscriptionInviteLink.call(mockBot, 123, "example text", "example text");

    expect(mockBot.callApi).toHaveBeenCalledWith('editChatSubscriptionInviteLink', {
      chat_id: 123,
      invite_link: "example text",
      name: "example text",
    });
  });
});