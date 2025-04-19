import pytest

from surfgram.helpers import CamelCaseConverter


class TestCamelCaseConverter:

    def test_convert(self):
        """Test the conversion to CamelCase."""
        converter = CamelCaseConverter()

        assert converter.convert("this_is_a_test") == "thisIsATest"
        assert converter.convert("another_example_case") == "anotherExampleCase"
        assert (
            converter.convert("singleword") == "singleword"
        )  # No change for single word
        assert converter.convert("") == ""  # Edge case: empty string
        assert converter.convert("leading_underscore") == "leadingUnderscore"
        assert (
            converter.convert("_trailing_underscore_") == "trailingUnderscore"
        )  # Handles leading and trailing underscores

    def test_convert_with_special_characters(self):
        """Test the conversion for strings with special characters."""
        converter = CamelCaseConverter()
        assert converter.convert("test_string!@#") == "testString!@#"
        assert (
            converter.convert("another-test_string") == "another-testString"
        )  # This won't convert the "-" character correctly
