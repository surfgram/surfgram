import { RichBlockTableCell } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('RichBlockTableCell', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      text: {} as any,
      is_header: true,
      colspan: 123,
      rowspan: 123,
      align: "example text",
      valign: "example text",
    };

    const instance = new RichBlockTableCell(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.text ?? instance.raw?.text).toEqual({} as any);
    expect(instance.isHeader ?? instance.raw?.is_header).toEqual(true);
    expect(instance.colspan ?? instance.raw?.colspan).toEqual(123);
    expect(instance.rowspan ?? instance.raw?.rowspan).toEqual(123);
    expect(instance.align ?? instance.raw?.align).toEqual("example text");
    expect(instance.valign ?? instance.raw?.valign).toEqual("example text");
  });
});