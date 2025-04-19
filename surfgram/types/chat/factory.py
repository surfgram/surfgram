from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatMeta(ABCMeta):
    """Metaclass for Chat classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatsFactory.register_chat(new_class)
        return new_class


class ChatsFactory(TypesFactory):
    """Factory for creating Chat instances."""

    CHATS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "chat"

    @classmethod
    def register_chat(cls, chat_cls: Type) -> None:
        """Register a new chat handler."""
        instance = chat_cls()
        for name in instance.__names__:
            cls.CHATS_REGISTRY[name] = chat_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat
        trigger_value = obj.title
        return cls.CHATS_REGISTRY.get(trigger_value)()
