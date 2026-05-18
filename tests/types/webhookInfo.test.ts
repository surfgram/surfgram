import { WebhookInfo } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('WebhookInfo', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      url: "example text",
      has_custom_certificate: true,
      pending_update_count: 123,
      ip_address: "example text",
      last_error_date: 123,
      last_error_message: "example text",
      last_synchronization_error_date: 123,
      max_connections: 123,
      allowed_updates: ["example text"],
    };

    const instance = new WebhookInfo(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.url ?? instance.raw?.url).toEqual("example text");
    expect(instance.hasCustomCertificate ?? instance.raw?.has_custom_certificate).toEqual(true);
    expect(instance.pendingUpdateCount ?? instance.raw?.pending_update_count).toEqual(123);
    expect(instance.ipAddress ?? instance.raw?.ip_address).toEqual("example text");
    expect(instance.lastErrorDate ?? instance.raw?.last_error_date).toEqual(123);
    expect(instance.lastErrorMessage ?? instance.raw?.last_error_message).toEqual("example text");
    expect(instance.lastSynchronizationErrorDate ?? instance.raw?.last_synchronization_error_date).toEqual(123);
    expect(instance.maxConnections ?? instance.raw?.max_connections).toEqual(123);
    expect(instance.allowedUpdates ?? instance.raw?.allowed_updates).toEqual(["example text"]);
  });
});