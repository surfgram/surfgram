import { setMyDefaultAdministratorRights } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('setMyDefaultAdministratorRights', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await setMyDefaultAdministratorRights.call(mockBot, {} as any, true);

    expect(mockBot.callApi).toHaveBeenCalledWith('setMyDefaultAdministratorRights', {
      rights: {} as any,
      for_channels: true,
    });
  });
});