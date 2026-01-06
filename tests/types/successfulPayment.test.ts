import { SuccessfulPayment } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("SuccessfulPayment", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			currency: "example text",
			total_amount: 123,
			invoice_payload: "example text",
			subscription_expiration_date: 123,
			is_recurring: true,
			is_first_recurring: true,
			shipping_option_id: "example text",
			order_info: {} as any,
			telegram_payment_charge_id: "example text",
			provider_payment_charge_id: "example text",
		};

		const instance = new SuccessfulPayment(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.currency ?? instance.raw?.currency).toEqual("example text");
		expect(instance.totalAmount ?? instance.raw?.total_amount).toEqual(123);
		expect(instance.invoicePayload ?? instance.raw?.invoice_payload).toEqual(
			"example text",
		);
		expect(
			instance.subscriptionExpirationDate ??
				instance.raw?.subscription_expiration_date,
		).toEqual(123);
		expect(instance.isRecurring ?? instance.raw?.is_recurring).toEqual(true);
		expect(
			instance.isFirstRecurring ?? instance.raw?.is_first_recurring,
		).toEqual(true);
		expect(
			instance.shippingOptionId ?? instance.raw?.shipping_option_id,
		).toEqual("example text");
		expect(instance.orderInfo ?? instance.raw?.order_info).toEqual({} as any);
		expect(
			instance.telegramPaymentChargeId ??
				instance.raw?.telegram_payment_charge_id,
		).toEqual("example text");
		expect(
			instance.providerPaymentChargeId ??
				instance.raw?.provider_payment_charge_id,
		).toEqual("example text");
	});
});
