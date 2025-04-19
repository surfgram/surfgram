class Link:
    """
    Represents a Telegram Bot API link.
    """

    BASE_URL: str = "https://core.telegram.org/bots"

    def __init__(self, endpoint: str) -> None:
        """
        Initializes a Link object.

        Args:
            endpoint: The link endpoint.
        """
        self.endpoint: str = endpoint

    def __str__(self) -> str:
        """
        Returns a string representation of the link.

        Returns:
            A string representation of the link. An empty string is returned if the link is invalid.
        """
        if self.is_valid():
            return f"{self.BASE_URL}{self.endpoint}"
        return ""

    def is_valid(self) -> bool:
        """
        Checks if the link is valid.

        A link is considered valid if it has a non-empty endpoint.

        Returns:
            True if the link is valid, False otherwise.
        """
        return bool(self.endpoint)
