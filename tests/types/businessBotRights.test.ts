import { BusinessBotRights } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('BusinessBotRights', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      can_reply: true,
      can_read_messages: true,
      can_delete_sent_messages: true,
      can_delete_all_messages: true,
      can_edit_name: true,
      can_edit_bio: true,
      can_edit_profile_photo: true,
      can_edit_username: true,
      can_change_gift_settings: true,
      can_view_gifts_and_stars: true,
      can_convert_gifts_to_stars: true,
      can_transfer_and_upgrade_gifts: true,
      can_transfer_stars: true,
      can_manage_stories: true,
    };

    const instance = new BusinessBotRights(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.canReply ?? instance.raw?.can_reply).toEqual(true);
    expect(instance.canReadMessages ?? instance.raw?.can_read_messages).toEqual(true);
    expect(instance.canDeleteSentMessages ?? instance.raw?.can_delete_sent_messages).toEqual(true);
    expect(instance.canDeleteAllMessages ?? instance.raw?.can_delete_all_messages).toEqual(true);
    expect(instance.canEditName ?? instance.raw?.can_edit_name).toEqual(true);
    expect(instance.canEditBio ?? instance.raw?.can_edit_bio).toEqual(true);
    expect(instance.canEditProfilePhoto ?? instance.raw?.can_edit_profile_photo).toEqual(true);
    expect(instance.canEditUsername ?? instance.raw?.can_edit_username).toEqual(true);
    expect(instance.canChangeGiftSettings ?? instance.raw?.can_change_gift_settings).toEqual(true);
    expect(instance.canViewGiftsAndStars ?? instance.raw?.can_view_gifts_and_stars).toEqual(true);
    expect(instance.canConvertGiftsToStars ?? instance.raw?.can_convert_gifts_to_stars).toEqual(
      true
    );
    expect(
      instance.canTransferAndUpgradeGifts ?? instance.raw?.can_transfer_and_upgrade_gifts
    ).toEqual(true);
    expect(instance.canTransferStars ?? instance.raw?.can_transfer_stars).toEqual(true);
    expect(instance.canManageStories ?? instance.raw?.can_manage_stories).toEqual(true);
  });
});
