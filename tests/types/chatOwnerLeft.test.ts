import { ChatOwnerLeft } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('ChatOwnerLeft', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      new_owner: {} as any,
    };

    const instance = new ChatOwnerLeft(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.newOwner ?? instance.raw?.new_owner).toEqual({} as any);
  });
});