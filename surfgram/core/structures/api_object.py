from difflib import get_close_matches
from typing import Dict, Any, List


class APIObject:
    """
    Represents a JSON as object.
    """

    def __init__(self, data: Dict[str, Any]):
        """
        Initializes the APIObject.

        Args:
            data: A dictionary representing the API response.
        """
        self._data = data

    def __getattr__(self, item: str) -> Any:
        """
        Dynamically retrieves a value from the API response.

        When an attribute is accessed, this method checks if it exists in
        the response data.  If it does, the associated value is returned.
        If not, it attempts to suggest possible matches.

        Args:
            item: The name of the attribute being accessed.

        Returns:
            The value associated with the attribute, or an AttributeError
            with suggested alternatives if the attribute does not exist.

        Raises:
            AttributeError: If the attribute is not found in the API response.
        """
        value = self._data.get(item)

        if value is None:
            available = dir(self) + list(self._data.keys())
            similar = self._get_similar(item, available)

            raise AttributeError(
                f"'{self.__class__.__name__}' object has no attribute '{item}'. "
                f"Did you mean: {''.join(similar)}?"
            )

        if isinstance(value, dict):
            return APIObject(value)

        return value

    def __repr__(self) -> str:
        """
        Returns a string representation of the APIObject.
        """
        return f"{self.__class__.__name__}({self._data})"

    def _get_similar(self, item: str, available: List[str]) -> List[str]:
        """
        Finds the closest matching attribute or key in the available options.

        Args:
            item: The name of the attribute being accessed.
            available: A list of available attributes and keys.

        Returns:
            A list containing the single closest match, or an empty list
            if no match was found.
        """
        return get_close_matches(item, available, n=1)
