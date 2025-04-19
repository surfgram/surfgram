from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatJoinRequestMeta(ABCMeta):
    """Metaclass for ChatJoinRequest classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatJoinRequestsFactory.register_chat_join_request(new_class)
        return new_class


class ChatJoinRequestsFactory(TypesFactory):
    """Factory for creating ChatJoinRequest instances."""

    CHATJOINREQUESTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "chat_join_request"

    @classmethod
    def register_chat_join_request(cls, chat_join_request_cls: Type) -> None:
        """Register a new chat_join_request handler."""
        instance = chat_join_request_cls()
        for name in instance.__names__:
            cls.CHATJOINREQUESTS_REGISTRY[name] = chat_join_request_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_join_request
        trigger_value = obj.bio
        return cls.CHATJOINREQUESTS_REGISTRY.get(trigger_value)()
