import { ChatPhoto } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('ChatPhoto', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      small_file_id: 'example text',
      small_file_unique_id: 'example text',
      big_file_id: 'example text',
      big_file_unique_id: 'example text',
    };

    const instance = new ChatPhoto(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.smallFileId ?? instance.raw?.small_file_id).toEqual('example text');
    expect(instance.smallFileUniqueId ?? instance.raw?.small_file_unique_id).toEqual(
      'example text'
    );
    expect(instance.bigFileId ?? instance.raw?.big_file_id).toEqual('example text');
    expect(instance.bigFileUniqueId ?? instance.raw?.big_file_unique_id).toEqual('example text');
  });
});
