import pytest

from surfgram.markup import Markdown


class TestMarkdown:

    def test_bold(self):
        """Test the bold method."""
        assert Markdown.bold("text") == "**text**"
        assert Markdown.bold("bold") == "**bold**"

    def test_italic(self):
        """Test the italic method."""
        assert Markdown.italic("text") == "__text__"
        assert Markdown.italic("italic") == "__italic__"

    def test_underline(self):
        """Test the underline method."""
        assert Markdown.underline("text") == "~~text~~"
        assert Markdown.underline("underline") == "~~underline~~"

    def test_strikethrough(self):
        """Test the strikethrough method."""
        assert Markdown.strikethrough("text") == "~~text~~"
        assert Markdown.strikethrough("strikethrough") == "~~strikethrough~~"

    def test_spoiler(self):
        """Test the spoiler method."""
        assert Markdown.spoiler("text") == "||text||"
        assert Markdown.spoiler("spoiler") == "||spoiler||"

    def test_inline_code(self):
        """Test the inline_code method."""
        assert Markdown.inline_code("text") == "`text`"
        assert Markdown.inline_code("inline code") == "`inline code`"

    def test_code_block(self):
        """Test the code_block method with and without language."""
        assert (
            Markdown.code_block("print('Hello, World!')")
            == "```\nprint('Hello, World!')\n```"
        )
        assert (
            Markdown.code_block("print('Hello, World!')", "python")
            == "```python\nprint('Hello, World!')\n```"
        )

    def test_link(self):
        """Test the link method."""
        assert (
            Markdown.link("Google", "http://www.google.com")
            == "[Google](http://www.google.com"
        )
