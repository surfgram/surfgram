import { InputStoryContent } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InputStoryContent', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: 'example text',
      photo: 'example text',
    };

    const instance = new InputStoryContent(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.type ?? instance.raw?.type).toEqual('example text');
    expect(instance.photo ?? instance.raw?.photo).toEqual('example text');
  });
});
