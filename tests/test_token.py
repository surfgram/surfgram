import pytest

from surfgram.core.validator import Token
from surfgram.exceptions import TokenError


class TestToken:

    def test_valid_token(self):
        """Tests a valid token format."""
        valid_token = "1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567"
        token = Token(valid_token)
        assert str(token) == valid_token

    def test_valid_token_with_special_chars(self):
        """Tests a valid token format that includes special characters."""
        valid_token = "1234567890:ABCDEF-GHIJKL_MNO_PQR_STUV-WXYZ123456"
        token = Token(valid_token)
        assert str(token) == valid_token

    @pytest.mark.parametrize(
        "invalid_token",
        [
            "invalid_token",  # No number and colon
            "123:4567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567",  # More than one colon
            "1234567890:short",  # Token part too short (less than 35 characters)
            "1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567.=",  # Invalid characters
        ],
    )
    def test_invalid_tokens(self, invalid_token):
        """Tests various invalid token formats."""
        with pytest.raises(TokenError, match="Invalid token!"):
            Token(invalid_token)

    def test_token_with_only_numbers(self):
        """Tests the Token class with only numeric values."""
        invalid_token = "1234567890"  # No colon
        with pytest.raises(TokenError, match="Invalid token!"):
            Token(invalid_token)

    def test_token_empty_string(self):
        """Tests the Token class with an empty string."""
        with pytest.raises(TokenError, match="Invalid token!"):
            Token("")

    def test_token_too_long(self):
        """Tests the Token class with a token that is too long."""
        too_long_token = "1234567890:" + "A" * 100  # Token part is excessively long
        with pytest.raises(TokenError, match="Invalid token!"):
            Token(too_long_token)
