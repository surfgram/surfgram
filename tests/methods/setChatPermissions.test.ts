import { setChatPermissions } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('setChatPermissions', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await setChatPermissions.call(mockBot, 123, {} as any, true);

    expect(mockBot.callApi).toHaveBeenCalledWith('setChatPermissions', {
      chat_id: 123,
      permissions: {} as any,
      use_independent_chat_permissions: true,
    });
  });
});