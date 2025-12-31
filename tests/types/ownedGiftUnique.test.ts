import { OwnedGiftUnique } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("OwnedGiftUnique", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			type: "example text",
			gift: {} as any,
			owned_gift_id: "example text",
			sender_user: {} as any,
			send_date: 123,
			is_saved: true,
			can_be_transferred: true,
			transfer_star_count: 123,
			next_transfer_date: 123,
		};

		const instance = new OwnedGiftUnique(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.type ?? instance.raw?.type).toEqual("example text");
		expect(instance.gift ?? instance.raw?.gift).toEqual({} as any);
		expect(instance.ownedGiftId ?? instance.raw?.owned_gift_id).toEqual(
			"example text",
		);
		expect(instance.senderUser ?? instance.raw?.sender_user).toEqual({} as any);
		expect(instance.sendDate ?? instance.raw?.send_date).toEqual(123);
		expect(instance.isSaved ?? instance.raw?.is_saved).toEqual(true);
		expect(
			instance.canBeTransferred ?? instance.raw?.can_be_transferred,
		).toEqual(true);
		expect(
			instance.transferStarCount ?? instance.raw?.transfer_star_count,
		).toEqual(123);
		expect(
			instance.nextTransferDate ?? instance.raw?.next_transfer_date,
		).toEqual(123);
	});
});
