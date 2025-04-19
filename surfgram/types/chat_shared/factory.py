from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatSharedMeta(ABCMeta):
    """Metaclass for ChatShared classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatSharedsFactory.register_chat_shared(new_class)
        return new_class


class ChatSharedsFactory(TypesFactory):
    """Factory for creating ChatShared instances."""

    CHATSHAREDS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "chat_shared"

    @classmethod
    def register_chat_shared(cls, chat_shared_cls: Type) -> None:
        """Register a new chat_shared handler."""
        instance = chat_shared_cls()
        for name in instance.__names__:
            cls.CHATSHAREDS_REGISTRY[name] = chat_shared_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_shared
        trigger_value = obj.title
        return cls.CHATSHAREDS_REGISTRY.get(trigger_value)()
