import { PreCheckoutQuery } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("PreCheckoutQuery", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			id: "example text",
			from: {} as any,
			currency: "example text",
			total_amount: 123,
			invoice_payload: "example text",
			shipping_option_id: "example text",
			order_info: {} as any,
		};

		const instance = new PreCheckoutQuery(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.id ?? instance.raw?.id).toEqual("example text");
		expect(instance.from ?? instance.raw?.from).toEqual({} as any);
		expect(instance.currency ?? instance.raw?.currency).toEqual("example text");
		expect(instance.totalAmount ?? instance.raw?.total_amount).toEqual(123);
		expect(instance.invoicePayload ?? instance.raw?.invoice_payload).toEqual(
			"example text",
		);
		expect(
			instance.shippingOptionId ?? instance.raw?.shipping_option_id,
		).toEqual("example text");
		expect(instance.orderInfo ?? instance.raw?.order_info).toEqual({} as any);
	});
});
