import { RichBlockListItem } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('RichBlockListItem', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      label: "example text",
      blocks: [{} as any],
      has_checkbox: true,
      is_checked: true,
      value: 123,
      type: "example text",
    };

    const instance = new RichBlockListItem(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.label ?? instance.raw?.label).toEqual("example text");
    expect(instance.blocks ?? instance.raw?.blocks).toEqual([{} as any]);
    expect(instance.hasCheckbox ?? instance.raw?.has_checkbox).toEqual(true);
    expect(instance.isChecked ?? instance.raw?.is_checked).toEqual(true);
    expect(instance.value ?? instance.raw?.value).toEqual(123);
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
  });
});