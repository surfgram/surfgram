import { setChatPhoto } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('setChatPhoto', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await setChatPhoto.call(mockBot, 123, {} as any);

    expect(mockBot.callApi).toHaveBeenCalledWith('setChatPhoto', {
      chat_id: 123,
      photo: {} as any,
    });
  });
});
