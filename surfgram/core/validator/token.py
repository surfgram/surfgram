import re
from surfgram.exceptions import TokenError


class Token:
    """
    Class representing a Telegram bot token.

    This class is responsible for managing the bot token,
    including validation to ensure it adheres to the expected format.
    """

    TOKEN_PATTERN = r"^\d{1,10}:[A-Za-z0-9_-]{35,}$"

    def __init__(self, token: str):
        """
        Initializes the Token instance.

        Args:
            token (str): The bot token string to be validated.

        Raises:
            TokenError: If the token does not match the expected format.
        """
        self.token = token
        self.validate()

    def validate(self) -> None:
        """
        Validates the bot token against the expected format.

        Raises:
            TokenError: If the token is invalid according to the defined pattern.
        """
        if not re.fullmatch(self.TOKEN_PATTERN, self.token):
            raise TokenError("Invalid token!")

    def __str__(self) -> str:
        """
        Returns the string representation of the Token instance.

        Returns:
            str: The bot token string.
        """
        return self.token
