import { Sticker } from "../../src/api";
import { Bot } from "../../src/core/bot";

describe("Sticker", () => {
	const mockBot = { callApi: jest.fn() } as unknown as Bot;

	it("should correctly instantiate from raw data", () => {
		const raw = {
			file_id: "example text",
			file_unique_id: "example text",
			type: "example text",
			width: 123,
			height: 123,
			is_animated: true,
			is_video: true,
			thumbnail: {} as any,
			emoji: "example text",
			set_name: "example text",
			premium_animation: {} as any,
			mask_position: {} as any,
			custom_emoji_id: "example text",
			needs_repainting: true,
			file_size: 123,
		};

		const instance = new Sticker(raw, mockBot);

		expect(instance.raw).toEqual(raw);
		expect(instance.bot).toBe(mockBot);

		expect(instance.fileId ?? instance.raw?.file_id).toEqual("example text");
		expect(instance.fileUniqueId ?? instance.raw?.file_unique_id).toEqual(
			"example text",
		);
		expect(instance.type ?? instance.raw?.type).toEqual("example text");
		expect(instance.width ?? instance.raw?.width).toEqual(123);
		expect(instance.height ?? instance.raw?.height).toEqual(123);
		expect(instance.isAnimated ?? instance.raw?.is_animated).toEqual(true);
		expect(instance.isVideo ?? instance.raw?.is_video).toEqual(true);
		expect(instance.thumbnail ?? instance.raw?.thumbnail).toEqual({} as any);
		expect(instance.emoji ?? instance.raw?.emoji).toEqual("example text");
		expect(instance.setName ?? instance.raw?.set_name).toEqual("example text");
		expect(
			instance.premiumAnimation ?? instance.raw?.premium_animation,
		).toEqual({} as any);
		expect(instance.maskPosition ?? instance.raw?.mask_position).toEqual(
			{} as any,
		);
		expect(instance.customEmojiId ?? instance.raw?.custom_emoji_id).toEqual(
			"example text",
		);
		expect(instance.needsRepainting ?? instance.raw?.needs_repainting).toEqual(
			true,
		);
		expect(instance.fileSize ?? instance.raw?.file_size).toEqual(123);
	});
});
