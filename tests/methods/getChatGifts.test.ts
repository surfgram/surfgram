import { getChatGifts } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('getChatGifts', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      chatId: 123,
      excludeUnsaved: true,
      excludeSaved: true,
      excludeUnlimited: true,
      excludeLimitedUpgradable: true,
      excludeLimitedNonUpgradable: true,
      excludeFromBlockchain: true,
      excludeUnique: true,
      sortByPrice: true,
      offset: "example text",
      limit: 123,
    };

    await getChatGifts.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('getChatGifts', {
      chat_id: 123,
      exclude_unsaved: true,
      exclude_saved: true,
      exclude_unlimited: true,
      exclude_limited_upgradable: true,
      exclude_limited_non_upgradable: true,
      exclude_from_blockchain: true,
      exclude_unique: true,
      sort_by_price: true,
      offset: "example text",
      limit: 123,
    });
  });
});