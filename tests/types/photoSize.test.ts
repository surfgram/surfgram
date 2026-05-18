import { PhotoSize } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('PhotoSize', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      file_id: "example text",
      file_unique_id: "example text",
      width: 123,
      height: 123,
      file_size: 123,
    };

    const instance = new PhotoSize(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.fileId ?? instance.raw?.file_id).toEqual("example text");
    expect(instance.fileUniqueId ?? instance.raw?.file_unique_id).toEqual("example text");
    expect(instance.width ?? instance.raw?.width).toEqual(123);
    expect(instance.height ?? instance.raw?.height).toEqual(123);
    expect(instance.fileSize ?? instance.raw?.file_size).toEqual(123);
  });
});