import pytest
import re
from surfgram.core.validator.token import Token
from surfgram.exceptions import TokenError


class TestToken:
    VALID_TOKENS = [
        "1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmn",
        "1:A1b2C3d4E5f6G7h8I9j0K1l2M3n4O5p6Q7r8S9t0U1v2W3x4Y5",
        "12345:abcde-ABCDE_12345-abcde-ABCDE_12345-abcde",
    ]

    INVALID_TOKENS = [
        "",  # empty
        "1234567890",  # no colon
        ":ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmn",  # no digits
        "12345678901:ABC",  # too many digits, too short suffix
        "1234567890:ABC!@#",  # invalid characters
        "1234567890:ABC def",  # contains space
        "123:ABC",  # suffix too short
    ]

    @pytest.mark.parametrize("valid_token", VALID_TOKENS)
    def test_valid_token(self, valid_token):
        token = Token(valid_token)
        assert str(token) == valid_token

    @pytest.mark.parametrize("invalid_token", INVALID_TOKENS)
    def test_invalid_token(self, invalid_token):
        with pytest.raises(TokenError, match="Invalid token!"):
            Token(invalid_token)

    def test_validate_method_directly(self):
        token = Token(self.VALID_TOKENS[0])
        token.validate()

        token.token = self.INVALID_TOKENS[0]
        with pytest.raises(TokenError):
            token.validate()

    def test_str_representation(self):
        test_token = self.VALID_TOKENS[0]
        token = Token(test_token)
        assert str(token) == test_token

    def test_token_pattern(self):
        pattern = re.compile(Token.TOKEN_PATTERN)

        for token in self.VALID_TOKENS:
            assert pattern.fullmatch(token) is not None

        for token in self.INVALID_TOKENS:
            assert pattern.fullmatch(token) is None
