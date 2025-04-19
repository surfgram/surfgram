class Markdown:
    """Markdown formatting for Telegram Bot API (parse_mode='Markdown')"""

    @staticmethod
    def bold(text: str) -> str:
        return f"**{text}**"

    @staticmethod
    def italic(text: str) -> str:
        return f"__{text}__"

    @staticmethod
    def underline(text: str) -> str:
        return f"~~{text}~~"

    @staticmethod
    def strikethrough(text: str) -> str:
        return f"~~{text}~~"

    @staticmethod
    def spoiler(text: str) -> str:
        return f"||{text}||"

    @staticmethod
    def inline_code(text: str) -> str:
        return f"`{text}`"

    @staticmethod
    def code_block(text: str, language: str = "") -> str:
        return f"```{language}\n{text}\n```"

    @staticmethod
    def link(text: str, url: str) -> str:
        return f"[{text}]({url})"

    @staticmethod
    def mention(text: str, user_id: int) -> str:
        return f"[{text}](tg://user?id={user_id})"
