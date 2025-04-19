class BotError(Exception):
    """
    Base exception for all bot errors
    """

    def __init__(self, text: str) -> None:
        """
        Initialize a BotError instance.

        Args:
            text (str): The error message.
        """
        self.text: str = text
        super().__init__(self.text)

    def __str__(self) -> str:
        """
        Return a string representation of the exception.
        """
        return self.text
