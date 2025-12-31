import { createInvoiceLink } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("createInvoiceLink", () => {
	it("should call callApi with correct parameters", async () => {
		const mockBot = {
			callApi: jest.fn().mockResolvedValue({} as any),
		} as unknown as Bot;

		const params = {
			title: "example text",
			description: "example text",
			payload: "example text",
			currency: "example text",
			prices: [{} as any],
			businessConnectionId: "example text",
			providerToken: "example text",
			subscriptionPeriod: 123,
			maxTipAmount: 123,
			suggestedTipAmounts: [123],
			providerData: "example text",
			photoUrl: "example text",
			photoSize: 123,
			photoWidth: 123,
			photoHeight: 123,
			needName: true,
			needPhoneNumber: true,
			needEmail: true,
			needShippingAddress: true,
			sendPhoneNumberToProvider: true,
			sendEmailToProvider: true,
			isFlexible: true,
		};

		await createInvoiceLink.call(mockBot, params);

		expect(mockBot.callApi).toHaveBeenCalledWith("createInvoiceLink", {
			title: "example text",
			description: "example text",
			payload: "example text",
			currency: "example text",
			prices: [{} as any],
			business_connection_id: "example text",
			provider_token: "example text",
			subscription_period: 123,
			max_tip_amount: 123,
			suggested_tip_amounts: [123],
			provider_data: "example text",
			photo_url: "example text",
			photo_size: 123,
			photo_width: 123,
			photo_height: 123,
			need_name: true,
			need_phone_number: true,
			need_email: true,
			need_shipping_address: true,
			send_phone_number_to_provider: true,
			send_email_to_provider: true,
			is_flexible: true,
		});
	});
});
