import { Message } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('Message', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      message_id: 123,
      message_thread_id: 123,
      direct_messages_topic: {} as any,
      from: {} as any,
      sender_chat: {} as any,
      sender_boost_count: 123,
      sender_business_bot: {} as any,
      date: 123,
      business_connection_id: "example text",
      chat: {} as any,
      forward_origin: {} as any,
      is_topic_message: true,
      is_automatic_forward: true,
      reply_to_message: {} as any,
      external_reply: {} as any,
      quote: {} as any,
      reply_to_story: {} as any,
      reply_to_checklist_task_id: 123,
      via_bot: {} as any,
      edit_date: 123,
      has_protected_content: true,
      is_from_offline: true,
      is_paid_post: true,
      media_group_id: "example text",
      author_signature: "example text",
      paid_star_count: 123,
      text: "example text",
      entities: [{} as any],
      link_preview_options: {} as any,
      suggested_post_info: {} as any,
      effect_id: "example text",
      animation: {} as any,
      audio: {} as any,
      document: {} as any,
      paid_media: {} as any,
      photo: [{} as any],
      sticker: {} as any,
      story: {} as any,
      video: {} as any,
      video_note: {} as any,
      voice: {} as any,
      caption: "example text",
      caption_entities: [{} as any],
      show_caption_above_media: true,
      has_media_spoiler: true,
      checklist: {} as any,
      contact: {} as any,
      dice: {} as any,
      game: {} as any,
      poll: {} as any,
      venue: {} as any,
      location: {} as any,
      new_chat_members: [{} as any],
      left_chat_member: {} as any,
      new_chat_title: "example text",
      new_chat_photo: [{} as any],
      delete_chat_photo: true,
      group_chat_created: true,
      supergroup_chat_created: true,
      channel_chat_created: true,
      message_auto_delete_timer_changed: {} as any,
      migrate_to_chat_id: 123,
      migrate_from_chat_id: 123,
      pinned_message: {} as any,
      invoice: {} as any,
      successful_payment: {} as any,
      refunded_payment: {} as any,
      users_shared: {} as any,
      chat_shared: {} as any,
      gift: {} as any,
      unique_gift: {} as any,
      connected_website: "example text",
      write_access_allowed: {} as any,
      passport_data: {} as any,
      proximity_alert_triggered: {} as any,
      boost_added: {} as any,
      chat_background_set: {} as any,
      checklist_tasks_done: {} as any,
      checklist_tasks_added: {} as any,
      direct_message_price_changed: {} as any,
      forum_topic_created: {} as any,
      forum_topic_edited: {} as any,
      forum_topic_closed: {} as any,
      forum_topic_reopened: {} as any,
      general_forum_topic_hidden: {} as any,
      general_forum_topic_unhidden: {} as any,
      giveaway_created: {} as any,
      giveaway: {} as any,
      giveaway_winners: {} as any,
      giveaway_completed: {} as any,
      paid_message_price_changed: {} as any,
      suggested_post_approved: {} as any,
      suggested_post_approval_failed: {} as any,
      suggested_post_declined: {} as any,
      suggested_post_paid: {} as any,
      suggested_post_refunded: {} as any,
      video_chat_scheduled: {} as any,
      video_chat_started: {} as any,
      video_chat_ended: {} as any,
      video_chat_participants_invited: {} as any,
      web_app_data: {} as any,
      reply_markup: {} as any,
    };

    const instance = new Message(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.messageId ?? instance.raw?.message_id).toEqual(123);
    expect(instance.messageThreadId ?? instance.raw?.message_thread_id).toEqual(123);
    expect(instance.directMessagesTopic ?? instance.raw?.direct_messages_topic).toEqual({} as any);
    expect(instance.from ?? instance.raw?.from).toEqual({} as any);
    expect(instance.senderChat ?? instance.raw?.sender_chat).toEqual({} as any);
    expect(instance.senderBoostCount ?? instance.raw?.sender_boost_count).toEqual(123);
    expect(instance.senderBusinessBot ?? instance.raw?.sender_business_bot).toEqual({} as any);
    expect(instance.date ?? instance.raw?.date).toEqual(123);
    expect(instance.businessConnectionId ?? instance.raw?.business_connection_id).toEqual("example text");
    expect(instance.chat ?? instance.raw?.chat).toEqual({} as any);
    expect(instance.forwardOrigin ?? instance.raw?.forward_origin).toEqual({} as any);
    expect(instance.isTopicMessage ?? instance.raw?.is_topic_message).toEqual(true);
    expect(instance.isAutomaticForward ?? instance.raw?.is_automatic_forward).toEqual(true);
    expect(instance.replyToMessage ?? instance.raw?.reply_to_message).toEqual({} as any);
    expect(instance.externalReply ?? instance.raw?.external_reply).toEqual({} as any);
    expect(instance.quote ?? instance.raw?.quote).toEqual({} as any);
    expect(instance.replyToStory ?? instance.raw?.reply_to_story).toEqual({} as any);
    expect(instance.replyToChecklistTaskId ?? instance.raw?.reply_to_checklist_task_id).toEqual(123);
    expect(instance.viaBot ?? instance.raw?.via_bot).toEqual({} as any);
    expect(instance.editDate ?? instance.raw?.edit_date).toEqual(123);
    expect(instance.hasProtectedContent ?? instance.raw?.has_protected_content).toEqual(true);
    expect(instance.isFromOffline ?? instance.raw?.is_from_offline).toEqual(true);
    expect(instance.isPaidPost ?? instance.raw?.is_paid_post).toEqual(true);
    expect(instance.mediaGroupId ?? instance.raw?.media_group_id).toEqual("example text");
    expect(instance.authorSignature ?? instance.raw?.author_signature).toEqual("example text");
    expect(instance.paidStarCount ?? instance.raw?.paid_star_count).toEqual(123);
    expect(instance.text ?? instance.raw?.text).toEqual("example text");
    expect(instance.entities ?? instance.raw?.entities).toEqual([{} as any]);
    expect(instance.linkPreviewOptions ?? instance.raw?.link_preview_options).toEqual({} as any);
    expect(instance.suggestedPostInfo ?? instance.raw?.suggested_post_info).toEqual({} as any);
    expect(instance.effectId ?? instance.raw?.effect_id).toEqual("example text");
    expect(instance.animation ?? instance.raw?.animation).toEqual({} as any);
    expect(instance.audio ?? instance.raw?.audio).toEqual({} as any);
    expect(instance.document ?? instance.raw?.document).toEqual({} as any);
    expect(instance.paidMedia ?? instance.raw?.paid_media).toEqual({} as any);
    expect(instance.photo ?? instance.raw?.photo).toEqual([{} as any]);
    expect(instance.sticker ?? instance.raw?.sticker).toEqual({} as any);
    expect(instance.story ?? instance.raw?.story).toEqual({} as any);
    expect(instance.video ?? instance.raw?.video).toEqual({} as any);
    expect(instance.videoNote ?? instance.raw?.video_note).toEqual({} as any);
    expect(instance.voice ?? instance.raw?.voice).toEqual({} as any);
    expect(instance.caption ?? instance.raw?.caption).toEqual("example text");
    expect(instance.captionEntities ?? instance.raw?.caption_entities).toEqual([{} as any]);
    expect(instance.showCaptionAboveMedia ?? instance.raw?.show_caption_above_media).toEqual(true);
    expect(instance.hasMediaSpoiler ?? instance.raw?.has_media_spoiler).toEqual(true);
    expect(instance.checklist ?? instance.raw?.checklist).toEqual({} as any);
    expect(instance.contact ?? instance.raw?.contact).toEqual({} as any);
    expect(instance.dice ?? instance.raw?.dice).toEqual({} as any);
    expect(instance.game ?? instance.raw?.game).toEqual({} as any);
    expect(instance.poll ?? instance.raw?.poll).toEqual({} as any);
    expect(instance.venue ?? instance.raw?.venue).toEqual({} as any);
    expect(instance.location ?? instance.raw?.location).toEqual({} as any);
    expect(instance.newChatMembers ?? instance.raw?.new_chat_members).toEqual([{} as any]);
    expect(instance.leftChatMember ?? instance.raw?.left_chat_member).toEqual({} as any);
    expect(instance.newChatTitle ?? instance.raw?.new_chat_title).toEqual("example text");
    expect(instance.newChatPhoto ?? instance.raw?.new_chat_photo).toEqual([{} as any]);
    expect(instance.deleteChatPhoto ?? instance.raw?.delete_chat_photo).toEqual(true);
    expect(instance.groupChatCreated ?? instance.raw?.group_chat_created).toEqual(true);
    expect(instance.supergroupChatCreated ?? instance.raw?.supergroup_chat_created).toEqual(true);
    expect(instance.channelChatCreated ?? instance.raw?.channel_chat_created).toEqual(true);
    expect(instance.messageAutoDeleteTimerChanged ?? instance.raw?.message_auto_delete_timer_changed).toEqual({} as any);
    expect(instance.migrateToChatId ?? instance.raw?.migrate_to_chat_id).toEqual(123);
    expect(instance.migrateFromChatId ?? instance.raw?.migrate_from_chat_id).toEqual(123);
    expect(instance.pinnedMessage ?? instance.raw?.pinned_message).toEqual({} as any);
    expect(instance.invoice ?? instance.raw?.invoice).toEqual({} as any);
    expect(instance.successfulPayment ?? instance.raw?.successful_payment).toEqual({} as any);
    expect(instance.refundedPayment ?? instance.raw?.refunded_payment).toEqual({} as any);
    expect(instance.usersShared ?? instance.raw?.users_shared).toEqual({} as any);
    expect(instance.chatShared ?? instance.raw?.chat_shared).toEqual({} as any);
    expect(instance.gift ?? instance.raw?.gift).toEqual({} as any);
    expect(instance.uniqueGift ?? instance.raw?.unique_gift).toEqual({} as any);
    expect(instance.connectedWebsite ?? instance.raw?.connected_website).toEqual("example text");
    expect(instance.writeAccessAllowed ?? instance.raw?.write_access_allowed).toEqual({} as any);
    expect(instance.passportData ?? instance.raw?.passport_data).toEqual({} as any);
    expect(instance.proximityAlertTriggered ?? instance.raw?.proximity_alert_triggered).toEqual({} as any);
    expect(instance.boostAdded ?? instance.raw?.boost_added).toEqual({} as any);
    expect(instance.chatBackgroundSet ?? instance.raw?.chat_background_set).toEqual({} as any);
    expect(instance.checklistTasksDone ?? instance.raw?.checklist_tasks_done).toEqual({} as any);
    expect(instance.checklistTasksAdded ?? instance.raw?.checklist_tasks_added).toEqual({} as any);
    expect(instance.directMessagePriceChanged ?? instance.raw?.direct_message_price_changed).toEqual({} as any);
    expect(instance.forumTopicCreated ?? instance.raw?.forum_topic_created).toEqual({} as any);
    expect(instance.forumTopicEdited ?? instance.raw?.forum_topic_edited).toEqual({} as any);
    expect(instance.forumTopicClosed ?? instance.raw?.forum_topic_closed).toEqual({} as any);
    expect(instance.forumTopicReopened ?? instance.raw?.forum_topic_reopened).toEqual({} as any);
    expect(instance.generalForumTopicHidden ?? instance.raw?.general_forum_topic_hidden).toEqual({} as any);
    expect(instance.generalForumTopicUnhidden ?? instance.raw?.general_forum_topic_unhidden).toEqual({} as any);
    expect(instance.giveawayCreated ?? instance.raw?.giveaway_created).toEqual({} as any);
    expect(instance.giveaway ?? instance.raw?.giveaway).toEqual({} as any);
    expect(instance.giveawayWinners ?? instance.raw?.giveaway_winners).toEqual({} as any);
    expect(instance.giveawayCompleted ?? instance.raw?.giveaway_completed).toEqual({} as any);
    expect(instance.paidMessagePriceChanged ?? instance.raw?.paid_message_price_changed).toEqual({} as any);
    expect(instance.suggestedPostApproved ?? instance.raw?.suggested_post_approved).toEqual({} as any);
    expect(instance.suggestedPostApprovalFailed ?? instance.raw?.suggested_post_approval_failed).toEqual({} as any);
    expect(instance.suggestedPostDeclined ?? instance.raw?.suggested_post_declined).toEqual({} as any);
    expect(instance.suggestedPostPaid ?? instance.raw?.suggested_post_paid).toEqual({} as any);
    expect(instance.suggestedPostRefunded ?? instance.raw?.suggested_post_refunded).toEqual({} as any);
    expect(instance.videoChatScheduled ?? instance.raw?.video_chat_scheduled).toEqual({} as any);
    expect(instance.videoChatStarted ?? instance.raw?.video_chat_started).toEqual({} as any);
    expect(instance.videoChatEnded ?? instance.raw?.video_chat_ended).toEqual({} as any);
    expect(instance.videoChatParticipantsInvited ?? instance.raw?.video_chat_participants_invited).toEqual({} as any);
    expect(instance.webAppData ?? instance.raw?.web_app_data).toEqual({} as any);
    expect(instance.replyMarkup ?? instance.raw?.reply_markup).toEqual({} as any);
  });
});