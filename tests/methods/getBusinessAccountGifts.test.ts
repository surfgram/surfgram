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
      excludeLimited: true,
      excludeUnique: true,
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
      exclude_limited: true,
      exclude_unique: true,
      sort_by_price: true,
      offset: "example text",
      limit: 123,
    });
  });
});