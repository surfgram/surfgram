import { EncryptedCredentials } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('EncryptedCredentials', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      data: "example text",
      hash: "example text",
      secret: "example text",
    };

    const instance = new EncryptedCredentials(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.data ?? instance.raw?.data).toEqual("example text");
    expect(instance.hash ?? instance.raw?.hash).toEqual("example text");
    expect(instance.secret ?? instance.raw?.secret).toEqual("example text");
  });
});