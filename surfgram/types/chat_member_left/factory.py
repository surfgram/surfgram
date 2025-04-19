from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatMemberLeftMeta(ABCMeta):
    """Metaclass for ChatMemberLeft classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatMemberLeftsFactory.register_chat_member_left(new_class)
        return new_class


class ChatMemberLeftsFactory(TypesFactory):
    """Factory for creating ChatMemberLeft instances."""

    CHATMEMBERLEFTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "chat_member_left"

    @classmethod
    def register_chat_member_left(cls, chat_member_left_cls: Type) -> None:
        """Register a new chat_member_left handler."""
        instance = chat_member_left_cls()
        for name in instance.__names__:
            cls.CHATMEMBERLEFTS_REGISTRY[name] = chat_member_left_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_member_left
        trigger_value = obj.status
        return cls.CHATMEMBERLEFTS_REGISTRY.get(trigger_value)()
