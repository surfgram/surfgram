import { InputPollOption } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InputPollOption', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      text: 'example text',
      text_parse_mode: 'example text',
      text_entities: [{} as any],
    };

    const instance = new InputPollOption(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.text ?? instance.raw?.text).toEqual('example text');
    expect(instance.textParseMode ?? instance.raw?.text_parse_mode).toEqual('example text');
    expect(instance.textEntities ?? instance.raw?.text_entities).toEqual([{} as any]);
  });
});
