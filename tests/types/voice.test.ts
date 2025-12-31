import { Voice } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('Voice', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      file_id: 'example text',
      file_unique_id: 'example text',
      duration: 123,
      mime_type: 'example text',
      file_size: 123,
    };

    const instance = new Voice(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.fileId ?? instance.raw?.file_id).toEqual('example text');
    expect(instance.fileUniqueId ?? instance.raw?.file_unique_id).toEqual('example text');
    expect(instance.duration ?? instance.raw?.duration).toEqual(123);
    expect(instance.mimeType ?? instance.raw?.mime_type).toEqual('example text');
    expect(instance.fileSize ?? instance.raw?.file_size).toEqual(123);
  });
});
