import pytest
from surfgram.core.helpers.markup.markdown import Markdown


class TestMarkdown:
    @pytest.mark.parametrize(
        "text,expected",
        [
            ("hello", "**hello**"),
            ("123", "**123**"),
            ("", "****"),
        ],
    )
    def test_bold(self, text, expected):
        assert Markdown.bold(text) == expected

    @pytest.mark.parametrize(
        "text,expected",
        [
            ("hello", "__hello__"),
            ("test", "__test__"),
            ("", "____"),
        ],
    )
    def test_italic(self, text, expected):
        assert Markdown.italic(text) == expected

    @pytest.mark.parametrize(
        "text,expected",
        [
            ("hello", "~~hello~~"),
            ("text", "~~text~~"),
            ("", "~~~~"),
        ],
    )
    def test_underline(self, text, expected):
        assert Markdown.underline(text) == expected

    @pytest.mark.parametrize(
        "text,expected",
        [
            ("hello", "~~hello~~"),
            ("test", "~~test~~"),
            ("", "~~~~"),
        ],
    )
    def test_strikethrough(self, text, expected):
        assert Markdown.strikethrough(text) == expected

    @pytest.mark.parametrize(
        "text,expected",
        [
            ("spoiler", "||spoiler||"),
            ("secret", "||secret||"),
            ("", "||||"),
        ],
    )
    def test_spoiler(self, text, expected):
        assert Markdown.spoiler(text) == expected

    @pytest.mark.parametrize(
        "text,expected",
        [
            ("code", "`code`"),
            ("x = 1", "`x = 1`"),
            ("", "``"),
        ],
    )
    def test_inline_code(self, text, expected):
        assert Markdown.inline_code(text) == expected

    @pytest.mark.parametrize(
        "text,language,expected",
        [
            ("print('hello')", "python", "```python\nprint('hello')\n```"),
            ("x = 1", "", "```\nx = 1\n```"),
            ("", "js", "```js\n\n```"),
            ("", "", "```\n\n```"),
        ],
    )
    def test_code_block(self, text, language, expected):
        assert Markdown.code_block(text, language) == expected

    @pytest.mark.parametrize(
        "text,url,expected",
        [
            ("Google", "https://google.com", "[Google](https://google.com)"),
            ("", "https://empty.com", "[](https://empty.com)"),
        ],
    )
    def test_link(self, text, url, expected):
        assert Markdown.link(text, url) == expected

    @pytest.mark.parametrize(
        "text,user_id,expected",
        [
            ("John", 123, "[John](tg://user?id=123)"),
            ("", 456, "[](tg://user?id=456)"),
        ],
    )
    def test_mention(self, text, user_id, expected):
        assert Markdown.mention(text, user_id) == expected
