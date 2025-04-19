from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatLocationMeta(ABCMeta):
    """Metaclass for ChatLocation classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatLocationsFactory.register_chat_location(new_class)
        return new_class


class ChatLocationsFactory(TypesFactory):
    """Factory for creating ChatLocation instances."""

    CHATLOCATIONS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "chat_location"

    @classmethod
    def register_chat_location(cls, chat_location_cls: Type) -> None:
        """Register a new chat_location handler."""
        instance = chat_location_cls()
        for name in instance.__names__:
            cls.CHATLOCATIONS_REGISTRY[name] = chat_location_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_location
        trigger_value = obj.address
        return cls.CHATLOCATIONS_REGISTRY.get(trigger_value)()
