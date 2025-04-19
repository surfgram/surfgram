from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class PollOptionMeta(ABCMeta):
    """Metaclass for PollOption classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            PollOptionsFactory.register_poll_option(new_class)
        return new_class


class PollOptionsFactory(TypesFactory):
    """Factory for creating PollOption instances."""

    POLLOPTIONS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "poll_option"

    @classmethod
    def register_poll_option(cls, poll_option_cls: Type) -> None:
        """Register a new poll_option handler."""
        instance = poll_option_cls()
        for name in instance.__names__:
            cls.POLLOPTIONS_REGISTRY[name] = poll_option_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.poll_option
        trigger_value = obj.text
        return cls.POLLOPTIONS_REGISTRY.get(trigger_value)()
