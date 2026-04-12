import { setMyName } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('setMyName', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await setMyName.call(mockBot, "example text", "example text");

    expect(mockBot.callApi).toHaveBeenCalledWith('setMyName', {
      name: "example text",
      language_code: "example text",
    });
  });
});