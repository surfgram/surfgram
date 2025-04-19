import pytest

from surfgram.helpers import SnakeCaseConverter


class TestSnakeCaseConverter:

    def test_convert(self):
        """Test the conversion to snake_case."""
        converter = SnakeCaseConverter()

        assert converter.convert("This Is A Test") == "this_is_a_test"
        assert (
            converter.convert("AnotherExample") == "anotherexample"
        )  # Should convert PascalCase to snake_case
        assert (
            converter.convert("SingleWord") == "singleword"
        )  # No change for single word
        assert converter.convert("") == ""  # Edge case: empty string
        assert converter.convert("Leading Underscore") == "leading_underscore"
        assert (
            converter.convert("Trailing Underscore ") == "trailing_underscore"
        )  # Handles trailing spaces
        assert (
            converter.convert(" multiple   spaces ") == "multiple_spaces"
        )  # Handles multiple spaces
        assert (
            converter.convert("InputWithNumbers123") == "inputwithnumbers123"
        )  # Include numeric characters

    def test_special_characters(self):
        """Test the conversion for strings with special characters."""
        converter = SnakeCaseConverter()
        assert (
            converter.convert("Test@String") == "test@string"
        )  # Special characters should remain unchanged but in lowercase
        assert (
            converter.convert("Another-Test") == "another-test"
        )  # Hyphens should remain unchanged
