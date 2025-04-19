from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatBackgroundMeta(ABCMeta):
    """Metaclass for ChatBackground classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatBackgroundsFactory.register_chat_background(new_class)
        return new_class


class ChatBackgroundsFactory(TypesFactory):
    """Factory for creating ChatBackground instances."""

    CHATBACKGROUNDS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "chat_background"

    @classmethod
    def register_chat_background(cls, chat_background_cls: Type) -> None:
        """Register a new chat_background handler."""
        instance = chat_background_cls()
        for name in instance.__names__:
            cls.CHATBACKGROUNDS_REGISTRY[name] = chat_background_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_background
        trigger_value = obj.type
        return cls.CHATBACKGROUNDS_REGISTRY.get(trigger_value)()
