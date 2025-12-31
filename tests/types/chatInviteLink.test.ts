import { ChatInviteLink } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("ChatInviteLink", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			invite_link: "example text",
			creator: {} as any,
			creates_join_request: true,
			is_primary: true,
			is_revoked: true,
			name: "example text",
			expire_date: 123,
			member_limit: 123,
			pending_join_request_count: 123,
			subscription_period: 123,
			subscription_price: 123,
		};

		const instance = new ChatInviteLink(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.inviteLink ?? instance.raw?.invite_link).toEqual(
			"example text",
		);
		expect(instance.creator ?? instance.raw?.creator).toEqual({} as any);
		expect(
			instance.createsJoinRequest ?? instance.raw?.creates_join_request,
		).toEqual(true);
		expect(instance.isPrimary ?? instance.raw?.is_primary).toEqual(true);
		expect(instance.isRevoked ?? instance.raw?.is_revoked).toEqual(true);
		expect(instance.name ?? instance.raw?.name).toEqual("example text");
		expect(instance.expireDate ?? instance.raw?.expire_date).toEqual(123);
		expect(instance.memberLimit ?? instance.raw?.member_limit).toEqual(123);
		expect(
			instance.pendingJoinRequestCount ??
				instance.raw?.pending_join_request_count,
		).toEqual(123);
		expect(
			instance.subscriptionPeriod ?? instance.raw?.subscription_period,
		).toEqual(123);
		expect(
			instance.subscriptionPrice ?? instance.raw?.subscription_price,
		).toEqual(123);
	});
});
