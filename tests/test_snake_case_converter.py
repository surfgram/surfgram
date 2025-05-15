import pytest
from surfgram.core.helpers import SnakeCaseConverter


class TestSnakeCaseConverter:
    @pytest.fixture
    def converter(self):
        return SnakeCaseConverter()

    @pytest.mark.parametrize(
        "input_str, expected",
        [
            ("helloWorld", "helloworld"),
            ("HelloWorld", "helloworld"),
            ("simple", "simple"),
            ("", ""),
            (" ", "_"),
            ("   ", "___"),
            ("_", "_"),
            ("__", "__"),
            ("hello123World", "hello123world"),
            ("hello-world", "hello-world"),
            ("hello$world", "hello$world"),
            ("already_snake", "already_snake"),
            ("_leading_underscore", "_leading_underscore"),
        ],
    )
    def test_convert(self, converter, input_str, expected):
        assert converter.convert(input_str) == expected
