import { InputChecklistTask } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InputChecklistTask', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      id: 123,
      text: "example text",
      parse_mode: "example text",
      text_entities: [{} as any],
    };

    const instance = new InputChecklistTask(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.id ?? instance.raw?.id).toEqual(123);
    expect(instance.text ?? instance.raw?.text).toEqual("example text");
    expect(instance.parseMode ?? instance.raw?.parse_mode).toEqual("example text");
    expect(instance.textEntities ?? instance.raw?.text_entities).toEqual([{} as any]);
  });
});