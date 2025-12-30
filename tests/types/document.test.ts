import { Document } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('Document', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      file_id: 'example text',
      file_unique_id: 'example text',
      thumbnail: {} as any,
      file_name: 'example text',
      mime_type: 'example text',
      file_size: 123,
    };

    const instance = new Document(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.fileId ?? instance.raw?.file_id).toEqual('example text');
    expect(instance.fileUniqueId ?? instance.raw?.file_unique_id).toEqual('example text');
    expect(instance.thumbnail ?? instance.raw?.thumbnail).toEqual({} as any);
    expect(instance.fileName ?? instance.raw?.file_name).toEqual('example text');
    expect(instance.mimeType ?? instance.raw?.mime_type).toEqual('example text');
    expect(instance.fileSize ?? instance.raw?.file_size).toEqual(123);
  });
});
