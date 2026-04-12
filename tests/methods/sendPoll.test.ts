import { sendPoll } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('sendPoll', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      chatId: 123,
      question: "example text",
      options: [{} as any],
      businessConnectionId: "example text",
      messageThreadId: 123,
      questionParseMode: "example text",
      questionEntities: [{} as any],
      isAnonymous: true,
      type: "example text",
      allowsMultipleAnswers: true,
      allowsRevoting: true,
      shuffleOptions: true,
      allowAddingOptions: true,
      hideResultsUntilCloses: true,
      correctOptionIds: [123],
      explanation: "example text",
      explanationParseMode: "example text",
      explanationEntities: [{} as any],
      openPeriod: 123,
      closeDate: 123,
      isClosed: true,
      description: "example text",
      descriptionParseMode: "example text",
      descriptionEntities: [{} as any],
      disableNotification: true,
      protectContent: true,
      allowPaidBroadcast: true,
      messageEffectId: "example text",
      replyParameters: {} as any,
      replyMarkup: {} as any,
    };

    await sendPoll.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('sendPoll', {
      chat_id: 123,
      question: "example text",
      options: [{} as any],
      business_connection_id: "example text",
      message_thread_id: 123,
      question_parse_mode: "example text",
      question_entities: [{} as any],
      is_anonymous: true,
      type: "example text",
      allows_multiple_answers: true,
      allows_revoting: true,
      shuffle_options: true,
      allow_adding_options: true,
      hide_results_until_closes: true,
      correct_option_ids: [123],
      explanation: "example text",
      explanation_parse_mode: "example text",
      explanation_entities: [{} as any],
      open_period: 123,
      close_date: 123,
      is_closed: true,
      description: "example text",
      description_parse_mode: "example text",
      description_entities: [{} as any],
      disable_notification: true,
      protect_content: true,
      allow_paid_broadcast: true,
      message_effect_id: "example text",
      reply_parameters: {} as any,
      reply_markup: {} as any,
    });
  });
});