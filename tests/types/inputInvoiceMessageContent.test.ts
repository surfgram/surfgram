import { InputInvoiceMessageContent } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("InputInvoiceMessageContent", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			title: "example text",
			description: "example text",
			payload: "example text",
			provider_token: "example text",
			currency: "example text",
			prices: [{} as any],
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
		};

		const instance = new InputInvoiceMessageContent(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.title ?? instance.raw?.title).toEqual("example text");
		expect(instance.description ?? instance.raw?.description).toEqual(
			"example text",
		);
		expect(instance.payload ?? instance.raw?.payload).toEqual("example text");
		expect(instance.providerToken ?? instance.raw?.provider_token).toEqual(
			"example text",
		);
		expect(instance.currency ?? instance.raw?.currency).toEqual("example text");
		expect(instance.prices ?? instance.raw?.prices).toEqual([{} as any]);
		expect(instance.maxTipAmount ?? instance.raw?.max_tip_amount).toEqual(123);
		expect(
			instance.suggestedTipAmounts ?? instance.raw?.suggested_tip_amounts,
		).toEqual([123]);
		expect(instance.providerData ?? instance.raw?.provider_data).toEqual(
			"example text",
		);
		expect(instance.photoUrl ?? instance.raw?.photo_url).toEqual(
			"example text",
		);
		expect(instance.photoSize ?? instance.raw?.photo_size).toEqual(123);
		expect(instance.photoWidth ?? instance.raw?.photo_width).toEqual(123);
		expect(instance.photoHeight ?? instance.raw?.photo_height).toEqual(123);
		expect(instance.needName ?? instance.raw?.need_name).toEqual(true);
		expect(instance.needPhoneNumber ?? instance.raw?.need_phone_number).toEqual(
			true,
		);
		expect(instance.needEmail ?? instance.raw?.need_email).toEqual(true);
		expect(
			instance.needShippingAddress ?? instance.raw?.need_shipping_address,
		).toEqual(true);
		expect(
			instance.sendPhoneNumberToProvider ??
				instance.raw?.send_phone_number_to_provider,
		).toEqual(true);
		expect(
			instance.sendEmailToProvider ?? instance.raw?.send_email_to_provider,
		).toEqual(true);
		expect(instance.isFlexible ?? instance.raw?.is_flexible).toEqual(true);
	});
});
