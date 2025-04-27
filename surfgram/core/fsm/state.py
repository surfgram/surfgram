from typing import Type, TypeVar, Dict, Any, Optional, Callable
from dataclasses import dataclass, field
from abc import ABC, abstractmethod


@dataclass
class State:
    """
    Represents a state with attributes stored in a dictionary.

    Attributes:
        attributes: A dictionary to store arbitrary state attributes.
    """

    attributes: Dict[str, Any] = field(default_factory=dict)

    def set_attribute(self, name: str, value: Any) -> None:
        """
        Set an attribute in the state.

        Args:
            name: The name of the attribute to set.
            value: The value to store for the attribute.
        """
        self.attributes[name] = value

    def get_attribute(self, name: str, default: Any = None) -> Any:
        """
        Get an attribute from the state.

        Args:
            name: The name of the attribute to retrieve.
            default: Default value to return if attribute doesn't exist.

        Returns:
            The attribute value if found, otherwise the default value.
        """
        return self.attributes.get(name, default)
