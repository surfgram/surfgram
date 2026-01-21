import { PassportElementErrorTranslationFiles } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('PassportElementErrorTranslationFiles', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      source: "example text",
      type: "example text",
      file_hashes: ["example text"],
      message: "example text",
    };

    const instance = new PassportElementErrorTranslationFiles(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.source ?? instance.raw?.source).toEqual("example text");
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.fileHashes ?? instance.raw?.file_hashes).toEqual(["example text"]);
    expect(instance.message ?? instance.raw?.message).toEqual("example text");
  });
});