import { ChatOwnerChanged } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('ChatOwnerChanged', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      new_owner: {} as any,
    };

    const instance = new ChatOwnerChanged(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.newOwner ?? instance.raw?.new_owner).toEqual({} as any);
  });
});