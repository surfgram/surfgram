import { CopyTextButton } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('CopyTextButton', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      text: 'example text',
    };

    const instance = new CopyTextButton(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.text ?? instance.raw?.text).toEqual('example text');
  });
});
