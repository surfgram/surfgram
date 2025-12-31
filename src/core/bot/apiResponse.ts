/**
 * Telegram API response interface
 * @interface TelegramApiResponse
 * @template T - Type of result data
 * @property {boolean} ok - Whether the request was successful
 * @property {T} [result] - Result data (if ok is true)
 * @property {string} [description] - Error description (if ok is false)
 * @property {number} [error_code] - Error code (if ok is false)
 */
export interface TelegramApiResponse<T = any> {
	ok: boolean;
	result?: T;
	description?: string;
	error_code?: number;
}
