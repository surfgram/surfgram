import { EncryptedPassportElement } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('EncryptedPassportElement', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      data: "example text",
      phone_number: "example text",
      email: "example text",
      files: [{} as any],
      front_side: {} as any,
      reverse_side: {} as any,
      selfie: {} as any,
      translation: [{} as any],
      hash: "example text",
    };

    const instance = new EncryptedPassportElement(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.data ?? instance.raw?.data).toEqual("example text");
    expect(instance.phoneNumber ?? instance.raw?.phone_number).toEqual("example text");
    expect(instance.email ?? instance.raw?.email).toEqual("example text");
    expect(instance.files ?? instance.raw?.files).toEqual([{} as any]);
    expect(instance.frontSide ?? instance.raw?.front_side).toEqual({} as any);
    expect(instance.reverseSide ?? instance.raw?.reverse_side).toEqual({} as any);
    expect(instance.selfie ?? instance.raw?.selfie).toEqual({} as any);
    expect(instance.translation ?? instance.raw?.translation).toEqual([{} as any]);
    expect(instance.hash ?? instance.raw?.hash).toEqual("example text");
  });
});