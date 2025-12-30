import { getWebhookInfo } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('getWebhookInfo', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      url: 'example text',
      hasCustomCertificate: true,
      pendingUpdateCount: 123,
      ipAddress: 'example text',
      lastErrorDate: 123,
      lastErrorMessage: 'example text',
      lastSynchronizationErrorDate: 123,
      maxConnections: 123,
      allowedUpdates: ['example text'],
    };

    await getWebhookInfo.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('getWebhookInfo', {
      url: 'example text',
      has_custom_certificate: true,
      pending_update_count: 123,
      ip_address: 'example text',
      last_error_date: 123,
      last_error_message: 'example text',
      last_synchronization_error_date: 123,
      max_connections: 123,
      allowed_updates: ['example text'],
    });
  });
});
