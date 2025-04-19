class HTML:
    """HTML formatting for Telegram Bot API (parse_mode='HTML')"""

    @staticmethod
    def bold(text: str) -> str:
        return f"<b>{text}</b>"

    @staticmethod
    def italic(text: str) -> str:
        return f"<i>{text}</i>"

    @staticmethod
    def underline(text: str) -> str:
        return f"<u>{text}</u>"

    @staticmethod
    def strikethrough(text: str) -> str:
        return f"<s>{text}</s>"

    @staticmethod
    def spoiler(text: str) -> str:
        return f"<tg-spoiler>{text}</tg-spoiler>"

    @staticmethod
    def inline_code(text: str) -> str:
        return f"<code>{text}</code>"

    @staticmethod
    def code_block(text: str, language: str = "") -> str:
        return f"<pre><code>{text}</code></pre>"

    @staticmethod
    def link(text: str, url: str) -> str:
        return f'<a href="{url}">{text}</a>'

    @staticmethod
    def mention(text: str, user_id: int) -> str:
        return f'<a href="tg://user?id={user_id}">{text}</a>'

    @staticmethod
    def preformatted(text: str) -> str:
        return f"<pre>{text}</pre>"
