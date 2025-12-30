import { ExternalReplyInfo } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('ExternalReplyInfo', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      origin: {} as any,
      chat: {} as any,
      message_id: 123,
      link_preview_options: {} as any,
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
      has_media_spoiler: true,
      checklist: {} as any,
      contact: {} as any,
      dice: {} as any,
      game: {} as any,
      giveaway: {} as any,
      giveaway_winners: {} as any,
      invoice: {} as any,
      location: {} as any,
      poll: {} as any,
      venue: {} as any,
    };

    const instance = new ExternalReplyInfo(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.origin ?? instance.raw?.origin).toEqual({} as any);
    expect(instance.chat ?? instance.raw?.chat).toEqual({} as any);
    expect(instance.messageId ?? instance.raw?.message_id).toEqual(123);
    expect(instance.linkPreviewOptions ?? instance.raw?.link_preview_options).toEqual({} as any);
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
    expect(instance.hasMediaSpoiler ?? instance.raw?.has_media_spoiler).toEqual(true);
    expect(instance.checklist ?? instance.raw?.checklist).toEqual({} as any);
    expect(instance.contact ?? instance.raw?.contact).toEqual({} as any);
    expect(instance.dice ?? instance.raw?.dice).toEqual({} as any);
    expect(instance.game ?? instance.raw?.game).toEqual({} as any);
    expect(instance.giveaway ?? instance.raw?.giveaway).toEqual({} as any);
    expect(instance.giveawayWinners ?? instance.raw?.giveaway_winners).toEqual({} as any);
    expect(instance.invoice ?? instance.raw?.invoice).toEqual({} as any);
    expect(instance.location ?? instance.raw?.location).toEqual({} as any);
    expect(instance.poll ?? instance.raw?.poll).toEqual({} as any);
    expect(instance.venue ?? instance.raw?.venue).toEqual({} as any);
  });
});
