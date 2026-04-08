import { setWebhook } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('setWebhook', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      url: "example text",
      certificate: {} as any,
      ipAddress: "example text",
      maxConnections: 123,
      allowedUpdates: ["example text"],
      dropPendingUpdates: true,
      secretToken: "example text",
    };

    await setWebhook.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('setWebhook', {
      url: "example text",
      certificate: {} as any,
      ip_address: "example text",
      max_connections: 123,
      allowed_updates: ["example text"],
      drop_pending_updates: true,
      secret_token: "example text",
    });
  });
});