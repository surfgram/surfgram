import { editChatInviteLink } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('editChatInviteLink', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      chatId: 123,
      inviteLink: 'example text',
      name: 'example text',
      expireDate: 123,
      memberLimit: 123,
      createsJoinRequest: true,
    };

    await editChatInviteLink.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('editChatInviteLink', {
      chat_id: 123,
      invite_link: 'example text',
      name: 'example text',
      expire_date: 123,
      member_limit: 123,
      creates_join_request: true,
    });
  });
});
