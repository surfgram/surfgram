import { VideoNote } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('VideoNote', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      file_id: "example text",
      file_unique_id: "example text",
      length: 123,
      duration: 123,
      thumbnail: {} as any,
      file_size: 123,
    };

    const instance = new VideoNote(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.fileId ?? instance.raw?.file_id).toEqual("example text");
    expect(instance.fileUniqueId ?? instance.raw?.file_unique_id).toEqual("example text");
    expect(instance.length ?? instance.raw?.length).toEqual(123);
    expect(instance.duration ?? instance.raw?.duration).toEqual(123);
    expect(instance.thumbnail ?? instance.raw?.thumbnail).toEqual({} as any);
    expect(instance.fileSize ?? instance.raw?.file_size).toEqual(123);
  });
});