import { setChatTitle } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('setChatTitle', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await setChatTitle.call(mockBot, 123, "example text");

    expect(mockBot.callApi).toHaveBeenCalledWith('setChatTitle', {
      chat_id: 123,
      title: "example text",
    });
  });
});