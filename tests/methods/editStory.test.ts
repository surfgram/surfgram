import { editStory } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('editStory', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      businessConnectionId: "example text",
      storyId: 123,
      content: {} as any,
      caption: "example text",
      parseMode: "example text",
      captionEntities: [{} as any],
      areas: [{} as any],
    };

    await editStory.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('editStory', {
      business_connection_id: "example text",
      story_id: 123,
      content: {} as any,
      caption: "example text",
      parse_mode: "example text",
      caption_entities: [{} as any],
      areas: [{} as any],
    });
  });
});