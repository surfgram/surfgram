import { deleteStory } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('deleteStory', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await deleteStory.call(mockBot, "example text", 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('deleteStory', {
      business_connection_id: "example text",
      story_id: 123,
    });
  });
});