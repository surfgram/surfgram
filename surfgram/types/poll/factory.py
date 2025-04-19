from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class PollMeta(ABCMeta):
    """Metaclass for Poll classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            PollsFactory.register_poll(new_class)
        return new_class


class PollsFactory(TypesFactory):
    """Factory for creating Poll instances."""

    POLLS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "poll"

    @classmethod
    def register_poll(cls, poll_cls: Type) -> None:
        """Register a new poll handler."""
        instance = poll_cls()
        for name in instance.__names__:
            cls.POLLS_REGISTRY[name] = poll_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.poll
        trigger_value = obj.question
        return cls.POLLS_REGISTRY.get(trigger_value)()
