import { Video } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('Video', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      file_id: "example text",
      file_unique_id: "example text",
      width: 123,
      height: 123,
      duration: 123,
      thumbnail: {} as any,
      cover: [{} as any],
      start_timestamp: 123,
      file_name: "example text",
      mime_type: "example text",
      file_size: 123,
    };

    const instance = new Video(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.fileId ?? instance.raw?.file_id).toEqual("example text");
    expect(instance.fileUniqueId ?? instance.raw?.file_unique_id).toEqual("example text");
    expect(instance.width ?? instance.raw?.width).toEqual(123);
    expect(instance.height ?? instance.raw?.height).toEqual(123);
    expect(instance.duration ?? instance.raw?.duration).toEqual(123);
    expect(instance.thumbnail ?? instance.raw?.thumbnail).toEqual({} as any);
    expect(instance.cover ?? instance.raw?.cover).toEqual([{} as any]);
    expect(instance.startTimestamp ?? instance.raw?.start_timestamp).toEqual(123);
    expect(instance.fileName ?? instance.raw?.file_name).toEqual("example text");
    expect(instance.mimeType ?? instance.raw?.mime_type).toEqual("example text");
    expect(instance.fileSize ?? instance.raw?.file_size).toEqual(123);
  });
});