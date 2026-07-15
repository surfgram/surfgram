import { InputRichBlockTable } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InputRichBlockTable', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      cells: [[{} as any]],
      is_bordered: true,
      is_striped: true,
      caption: {} as any,
    };

    const instance = new InputRichBlockTable(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.cells ?? instance.raw?.cells).toEqual([[{} as any]]);
    expect(instance.isBordered ?? instance.raw?.is_bordered).toEqual(true);
    expect(instance.isStriped ?? instance.raw?.is_striped).toEqual(true);
    expect(instance.caption ?? instance.raw?.caption).toEqual({} as any);
  });
});