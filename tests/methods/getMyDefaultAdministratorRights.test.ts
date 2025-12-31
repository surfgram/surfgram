import { getMyDefaultAdministratorRights } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('getMyDefaultAdministratorRights', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await getMyDefaultAdministratorRights.call(mockBot, true);

    expect(mockBot.callApi).toHaveBeenCalledWith('getMyDefaultAdministratorRights', {
      for_channels: true,
    });
  });
});