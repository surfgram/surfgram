import { InlineQueryResultGame } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InlineQueryResultGame', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: 'example text',
      id: 'example text',
      game_short_name: 'example text',
      reply_markup: {} as any,
    };

    const instance = new InlineQueryResultGame(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.type ?? instance.raw?.type).toEqual('example text');
    expect(instance.id ?? instance.raw?.id).toEqual('example text');
    expect(instance.gameShortName ?? instance.raw?.game_short_name).toEqual('example text');
    expect(instance.replyMarkup ?? instance.raw?.reply_markup).toEqual({} as any);
  });
});
