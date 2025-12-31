import { getBusinessAccountGifts } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('getBusinessAccountGifts', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      businessConnectionId: "example text",
      excludeUnsaved: true,
      excludeSaved: true,
      excludeUnlimited: true,
      excludeLimitedUpgradable: true,
      excludeLimitedNonUpgradable: true,
      excludeUnique: true,
      excludeFromBlockchain: true,
      sortByPrice: true,
      offset: "example text",
      limit: 123,
    };

    await getBusinessAccountGifts.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('getBusinessAccountGifts', {
      business_connection_id: "example text",
      exclude_unsaved: true,
      exclude_saved: true,
      exclude_unlimited: true,
      exclude_limited_upgradable: true,
      exclude_limited_non_upgradable: true,
      exclude_unique: true,
      exclude_from_blockchain: true,
      sort_by_price: true,
      offset: "example text",
      limit: 123,
    });
  });
});