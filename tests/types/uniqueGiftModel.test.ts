import { UniqueGiftModel } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('UniqueGiftModel', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      name: "example text",
      sticker: {} as any,
      rarity_per_mille: 123,
      rarity: "example text",
    };

    const instance = new UniqueGiftModel(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.name ?? instance.raw?.name).toEqual("example text");
    expect(instance.sticker ?? instance.raw?.sticker).toEqual({} as any);
    expect(instance.rarityPerMille ?? instance.raw?.rarity_per_mille).toEqual(123);
    expect(instance.rarity ?? instance.raw?.rarity).toEqual("example text");
  });
});