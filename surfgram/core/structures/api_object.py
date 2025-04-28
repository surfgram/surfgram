from difflib import get_close_matches
from typing import Dict, Any, List, Optional


class APIObject:
    """Represents a JSON response as a dynamic object with attribute access.

    Provides dot notation access to dictionary keys and helpful error messages
    with suggestions when an attribute doesn't exist.
    """

    def __init__(self, data: Dict[str, Any]) -> None:
        """Initialize the APIObject with response data.

        Args:
            data: Dictionary representing the API response.
        """
        self._data = data

    def __getattr__(self, attribute_name: str) -> Any:
        """Dynamically retrieve a value from the API response.

        Args:
            attribute_name: The name of the attribute being accessed.

        Returns:
            The value associated with the attribute.

        Raises:
            AttributeError: If the attribute is not found, with suggested alternatives.
        """
        if attribute_name in self._data:
            return self._wrap_value(self._data[attribute_name])

        available_attrs = self._get_available_attributes()
        suggestion = self._get_attribute_suggestion(attribute_name, available_attrs)

        raise AttributeError(
            f"'{self.__class__.__name__}' has no attribute '{attribute_name}'. "
            f"{suggestion}"
        )

    def __repr__(self) -> str:
        """Return a developer-friendly string representation of the APIObject."""
        return f"{self.__class__.__name__}({self._data!r})"

    @staticmethod
    def _wrap_value(value: Any) -> Any:
        """Recursively wrap dictionary values in APIObject for nested access.

        Args:
            value: The value to potentially wrap.

        Returns:
            The original value or an APIObject-wrapped dictionary.
        """
        return APIObject(value) if isinstance(value, dict) else value

    def _get_available_attributes(self) -> List[str]:
        """Get all available attributes for suggestion purposes.

        Returns:
            List of attribute names including both data keys and object attributes.
        """
        object_attrs = [attr for attr in dir(self) if not attr.startswith("_")]
        return list(self._data.keys()) + object_attrs

    @staticmethod
    def _get_attribute_suggestion(name: str, available: List[str]) -> str:
        """Get the best matching suggestion for a missing attribute.

        Args:
            name: The missing attribute name.
            available: List of available attribute names.

        Returns:
            A formatted suggestion string or empty string if no good match found.
        """
        matches = get_close_matches(name, available, n=1, cutoff=0.6)
        return f"Did you mean '{matches[0]}'?" if matches else ""
