from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class MessageOriginChatMeta(ABCMeta):
    """Metaclass for MessageOriginChat classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            MessageOriginChatsFactory.register_message_origin_chat(new_class)
        return new_class


class MessageOriginChatsFactory(TypesFactory):
    """Factory for creating MessageOriginChat instances."""

    MESSAGEORIGINCHATS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "message_origin_chat"

    @classmethod
    def register_message_origin_chat(cls, message_origin_chat_cls: Type) -> None:
        """Register a new message_origin_chat handler."""
        instance = message_origin_chat_cls()
        for name in instance.__names__:
            cls.MESSAGEORIGINCHATS_REGISTRY[name] = message_origin_chat_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.message_origin_chat
        trigger_value = obj.type
        return cls.MESSAGEORIGINCHATS_REGISTRY.get(trigger_value)()
