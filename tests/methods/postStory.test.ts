import { postStory } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('postStory', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      businessConnectionId: "example text",
      content: {} as any,
      activePeriod: 123,
      caption: "example text",
      parseMode: "example text",
      captionEntities: [{} as any],
      areas: [{} as any],
      postToChatPage: true,
      protectContent: true,
    };

    await postStory.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('postStory', {
      business_connection_id: "example text",
      content: {} as any,
      active_period: 123,
      caption: "example text",
      parse_mode: "example text",
      caption_entities: [{} as any],
      areas: [{} as any],
      post_to_chat_page: true,
      protect_content: true,
    });
  });
});