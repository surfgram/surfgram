from typing import Optional


class TokenError(Exception):
    """
    Custom exception for token-related errors.

    This exception provides additional context for token errors, including
    an optional link to API documentation.
    """

    def __init__(self, text: str, api_docs: Optional[str] = None) -> None:
        """
        Initialize a TokenError instance.

        Args:
            text (str): The error message.
            api_docs (Optional[str], optional): A link to API documentation. Defaults to None.
        """
        self.text: str = text
        self.api_docs: Optional[str] = api_docs
        super().__init__(self.text)

    def __str__(self) -> str:
        """
        Return a string representation of the exception.

        If API documentation is provided, it is included in the error message.
        """
        if self.api_docs:
            return f"{self.text} For more information, visit: {self.api_docs}"
        return self.text
