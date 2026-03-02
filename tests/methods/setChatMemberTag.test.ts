import { setChatMemberTag } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('setChatMemberTag', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await setChatMemberTag.call(mockBot, 123, 123, "example text");

    expect(mockBot.callApi).toHaveBeenCalledWith('setChatMemberTag', {
      chat_id: 123,
      user_id: 123,
      tag: "example text",
    });
  });
});