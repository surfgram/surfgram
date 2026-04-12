import { getMyShortDescription } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('getMyShortDescription', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await getMyShortDescription.call(mockBot, "example text");

    expect(mockBot.callApi).toHaveBeenCalledWith('getMyShortDescription', {
      language_code: "example text",
    });
  });
});