import { setMyCommands } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('setMyCommands', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await setMyCommands.call(mockBot, [{} as any], {} as any, 'example text');

    expect(mockBot.callApi).toHaveBeenCalledWith('setMyCommands', {
      commands: [{} as any],
      scope: {} as any,
      language_code: 'example text',
    });
  });
});
