import pytest
from surfgram.core.helpers.markup.html import HTML


class TestHTML:
    @pytest.mark.parametrize(
        "text,expected",
        [
            ("hello", "<b>hello</b>"),
            ("123", "<b>123</b>"),
            ("", "<b></b>"),
        ],
    )
    def test_bold(self, text, expected):
        assert HTML.bold(text) == expected

    @pytest.mark.parametrize(
        "text,expected",
        [
            ("hello", "<i>hello</i>"),
            ("world", "<i>world</i>"),
            ("", "<i></i>"),
        ],
    )
    def test_italic(self, text, expected):
        assert HTML.italic(text) == expected

    @pytest.mark.parametrize(
        "text,expected",
        [
            ("hello", "<u>hello</u>"),
            ("text", "<u>text</u>"),
            ("", "<u></u>"),
        ],
    )
    def test_underline(self, text, expected):
        assert HTML.underline(text) == expected

    @pytest.mark.parametrize(
        "text,expected",
        [
            ("hello", "<s>hello</s>"),
            ("test", "<s>test</s>"),
            ("", "<s></s>"),
        ],
    )
    def test_strikethrough(self, text, expected):
        assert HTML.strikethrough(text) == expected

    @pytest.mark.parametrize(
        "text,expected",
        [
            ("spoiler", "<tg-spoiler>spoiler</tg-spoiler>"),
            ("secret", "<tg-spoiler>secret</tg-spoiler>"),
            ("", "<tg-spoiler></tg-spoiler>"),
        ],
    )
    def test_spoiler(self, text, expected):
        assert HTML.spoiler(text) == expected

    @pytest.mark.parametrize(
        "text,expected",
        [
            ("code", "<code>code</code>"),
            ("x = 1", "<code>x = 1</code>"),
            ("", "<code></code>"),
        ],
    )
    def test_inline_code(self, text, expected):
        assert HTML.inline_code(text) == expected

    @pytest.mark.parametrize(
        "text,language,expected",
        [
            ("print('hello')", "python", "<pre><code>print('hello')</code></pre>"),
            ("function()", "", "<pre><code>function()</code></pre>"),
            ("", "html", "<pre><code></code></pre>"),
        ],
    )
    def test_code_block(self, text, language, expected):
        assert HTML.code_block(text, language) == expected

    @pytest.mark.parametrize(
        "text,url,expected",
        [
            ("Google", "https://google.com", '<a href="https://google.com">Google</a>'),
            ("", "https://empty.com", '<a href="https://empty.com"></a>'),
        ],
    )
    def test_link(self, text, url, expected):
        assert HTML.link(text, url) == expected

    @pytest.mark.parametrize(
        "text,user_id,expected",
        [
            ("John", 123, '<a href="tg://user?id=123">John</a>'),
            ("", 456, '<a href="tg://user?id=456"></a>'),
        ],
    )
    def test_mention(self, text, user_id, expected):
        assert HTML.mention(text, user_id) == expected

    @pytest.mark.parametrize(
        "text,expected",
        [
            ("preformatted", "<pre>preformatted</pre>"),
            ("multi\nline", "<pre>multi\nline</pre>"),
            ("", "<pre></pre>"),
        ],
    )
    def test_preformatted(self, text, expected):
        assert HTML.preformatted(text) == expected
