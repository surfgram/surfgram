import { Contact } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('Contact', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      phone_number: 'example text',
      first_name: 'example text',
      last_name: 'example text',
      user_id: 123,
      vcard: 'example text',
    };

    const instance = new Contact(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.phoneNumber ?? instance.raw?.phone_number).toEqual('example text');
    expect(instance.firstName ?? instance.raw?.first_name).toEqual('example text');
    expect(instance.lastName ?? instance.raw?.last_name).toEqual('example text');
    expect(instance.userId ?? instance.raw?.user_id).toEqual(123);
    expect(instance.vcard ?? instance.raw?.vcard).toEqual('example text');
  });
});
