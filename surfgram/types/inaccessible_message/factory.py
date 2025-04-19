from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InaccessibleMessageMeta(ABCMeta):
    """Metaclass for InaccessibleMessage classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InaccessibleMessagesFactory.register_inaccessible_message(new_class)
        return new_class


class InaccessibleMessagesFactory(TypesFactory):
    """Factory for creating InaccessibleMessage instances."""

    INACCESSIBLEMESSAGES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "inaccessible_message"

    @classmethod
    def register_inaccessible_message(cls, inaccessible_message_cls: Type) -> None:
        """Register a new inaccessible_message handler."""
        instance = inaccessible_message_cls()
        for name in instance.__names__:
            cls.INACCESSIBLEMESSAGES_REGISTRY[name] = inaccessible_message_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.inaccessible_message
        trigger_value = obj.chat
        return cls.INACCESSIBLEMESSAGES_REGISTRY.get(trigger_value)()
