import pytest

from surfgram.markup import HTML


class TestHTML:

    def test_bold(self):
        """Test the bold method."""
        assert HTML.bold("text") == "<b>text</b>"
        assert HTML.bold("bold") == "<b>bold</b>"

    def test_italic(self):
        """Test the italic method."""
        assert HTML.italic("text") == "<i>text</i>"
        assert HTML.italic("italic") == "<i>italic</i>"

    def test_underline(self):
        """Test the underline method."""
        assert HTML.underline("text") == "<u>text</u>"
        assert HTML.underline("underline") == "<u>underline</u>"

    def test_strikethrough(self):
        """Test the strikethrough method."""
        assert HTML.strikethrough("text") == "<s>text</s>"
        assert HTML.strikethrough("strikethrough") == "<s>strikethrough</s>"

    def test_spoiler(self):
        """Test the spoiler method."""
        assert HTML.spoiler("text") == "<tg-spoiler>text</tg-spoiler>"
        assert HTML.spoiler("spoiler") == "<tg-spoiler>spoiler</tg-spoiler>"

    def test_inline_code(self):
        """Test the inline_code method."""
        assert HTML.inline_code("text") == "<code>text</code>"
        assert HTML.inline_code("inline code") == "<code>inline code</code>"

    def test_code_block(self):
        """Test the code_block method with and without language."""
        assert (
            HTML.code_block("print('Hello, World!')")
            == "<pre><code>print('Hello, World!')</code></pre>"
        )
        assert (
            HTML.code_block("print('Hello, World!')", "python")
            == "<pre><code>print('Hello, World!')</code></pre>"
        )

    def test_link(self):
        """Test the link method."""
        assert (
            HTML.link("Google", "http://www.google.com")
            == '<a href="http://www.google.com">Google</a>'
        )
        assert (
            HTML.link("Telegram", "https://telegram.org")
            == '<a href="https://telegram.org">Telegram</a>'
        )

    def test_mention(self):
        """Test the mention method."""
        assert HTML.mention("User", 12345) == '<a href="tg://user?id=12345">User</a>'
        assert HTML.mention("Admin", 67890) == '<a href="tg://user?id=67890">Admin</a>'

    def test_preformatted(self):
        """Test the preformatted method."""
        assert HTML.preformatted("text") == "<pre>text</pre>"
        assert HTML.preformatted("preformatted text") == "<pre>preformatted text</pre>"
