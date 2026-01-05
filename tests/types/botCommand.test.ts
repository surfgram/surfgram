import { BotCommand } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('BotCommand', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      command: "example text",
      description: "example text",
    };

    const instance = new BotCommand(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.command ?? instance.raw?.command).toEqual("example text");
    expect(instance.description ?? instance.raw?.description).toEqual("example text");
  });
});