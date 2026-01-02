import { deleteBusinessMessages } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('deleteBusinessMessages', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await deleteBusinessMessages.call(mockBot, "example text", [123]);

    expect(mockBot.callApi).toHaveBeenCalledWith('deleteBusinessMessages', {
      business_connection_id: "example text",
      message_ids: [123],
    });
  });
});