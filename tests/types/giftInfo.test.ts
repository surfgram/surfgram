import { GiftInfo } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('GiftInfo', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      gift: {} as any,
      owned_gift_id: 'example text',
      convert_star_count: 123,
      prepaid_upgrade_star_count: 123,
      can_be_upgraded: true,
      text: 'example text',
      entities: [{} as any],
      is_private: true,
    };

    const instance = new GiftInfo(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.gift ?? instance.raw?.gift).toEqual({} as any);
    expect(instance.ownedGiftId ?? instance.raw?.owned_gift_id).toEqual('example text');
    expect(instance.convertStarCount ?? instance.raw?.convert_star_count).toEqual(123);
    expect(instance.prepaidUpgradeStarCount ?? instance.raw?.prepaid_upgrade_star_count).toEqual(
      123
    );
    expect(instance.canBeUpgraded ?? instance.raw?.can_be_upgraded).toEqual(true);
    expect(instance.text ?? instance.raw?.text).toEqual('example text');
    expect(instance.entities ?? instance.raw?.entities).toEqual([{} as any]);
    expect(instance.isPrivate ?? instance.raw?.is_private).toEqual(true);
  });
});
