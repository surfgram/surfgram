from dataclasses import dataclass, field
from typing import Dict, Any


@dataclass
class State:
    """Represents a state with attributes."""

    attributes: Dict[str, Any] = field(default_factory=dict)
    name: str = ""  # Will be set by StatesMeta

    def set_attribute(self, name: str, value: Any) -> None:
        self.attributes[name] = value

    def get_attribute(self, name: str, default: Any = None) -> Any:
        return self.attributes.get(name, default)
