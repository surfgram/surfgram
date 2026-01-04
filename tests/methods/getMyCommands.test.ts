import { getMyCommands } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('getMyCommands', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await getMyCommands.call(mockBot, {} as any, "example text");

    expect(mockBot.callApi).toHaveBeenCalledWith('getMyCommands', {
      scope: {} as any,
      language_code: "example text",
    });
  });
});