import { deleteEphemeralMessage } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('deleteEphemeralMessage', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await deleteEphemeralMessage.call(mockBot, 123, 123, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('deleteEphemeralMessage', {
      chat_id: 123,
      receiver_user_id: 123,
      ephemeral_message_id: 123,
    });
  });
});