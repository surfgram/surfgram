import { revokeChatInviteLink } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('revokeChatInviteLink', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await revokeChatInviteLink.call(mockBot, 123, "example text");

    expect(mockBot.callApi).toHaveBeenCalledWith('revokeChatInviteLink', {
      chat_id: 123,
      invite_link: "example text",
    });
  });
});