import { getMyName } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('getMyName', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await getMyName.call(mockBot, "example text");

    expect(mockBot.callApi).toHaveBeenCalledWith('getMyName', {
      language_code: "example text",
    });
  });
});