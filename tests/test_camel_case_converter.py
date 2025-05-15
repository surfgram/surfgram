import pytest
from surfgram.core.helpers import CamelCaseConverter


class TestCamelCaseConverter:
    @pytest.fixture
    def converter(self):
        return CamelCaseConverter()

    @pytest.mark.parametrize(
        "input_str, expected",
        [
            ("hello_world", "helloWorld"),
            ("foo_bar_baz", "fooBarBaz"),
            ("simple", "simple"),
            ("", ""),
            ("_", ""),
            ("__", ""),
            ("hello__world", "helloWorld"),
            ("user_id_123", "userId123"),
            ("123_test", "123Test"),
            ("hello_world!", "helloWorld!"),
            ("test$value", "test$value"),
        ],
    )
    def test_convert(self, converter, input_str, expected):
        assert converter.convert(input_str) == expected
