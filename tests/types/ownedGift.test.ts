import { OwnedGift } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("OwnedGift", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			type: "example text",
			gift: {} as any,
			owned_gift_id: "example text",
			sender_user: {} as any,
			send_date: 123,
			text: "example text",
			entities: [{} as any],
			is_private: true,
			is_saved: true,
			can_be_upgraded: true,
			was_refunded: true,
			convert_star_count: 123,
			prepaid_upgrade_star_count: 123,
			is_upgrade_separate: true,
			unique_gift_number: 123,
		};

		const instance = new OwnedGift(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.type ?? instance.raw?.type).toEqual("example text");
		expect(instance.gift ?? instance.raw?.gift).toEqual({} as any);
		expect(instance.ownedGiftId ?? instance.raw?.owned_gift_id).toEqual(
			"example text",
		);
		expect(instance.senderUser ?? instance.raw?.sender_user).toEqual({} as any);
		expect(instance.sendDate ?? instance.raw?.send_date).toEqual(123);
		expect(instance.text ?? instance.raw?.text).toEqual("example text");
		expect(instance.entities ?? instance.raw?.entities).toEqual([{} as any]);
		expect(instance.isPrivate ?? instance.raw?.is_private).toEqual(true);
		expect(instance.isSaved ?? instance.raw?.is_saved).toEqual(true);
		expect(instance.canBeUpgraded ?? instance.raw?.can_be_upgraded).toEqual(
			true,
		);
		expect(instance.wasRefunded ?? instance.raw?.was_refunded).toEqual(true);
		expect(
			instance.convertStarCount ?? instance.raw?.convert_star_count,
		).toEqual(123);
		expect(
			instance.prepaidUpgradeStarCount ??
				instance.raw?.prepaid_upgrade_star_count,
		).toEqual(123);
		expect(
			instance.isUpgradeSeparate ?? instance.raw?.is_upgrade_separate,
		).toEqual(true);
		expect(
			instance.uniqueGiftNumber ?? instance.raw?.unique_gift_number,
		).toEqual(123);
	});
});
