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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "chat_join_request"

    @classmethod
    def register_chat_join_request(cls, chat_join_request_cls: Type) -> None:
        """Register a new chat_join_request handler."""
        instance = chat_join_request_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = chat_join_request_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.CHATJOINREQUESTS_REGISTRY[name] = chat_join_request_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_join_request
        trigger_value = obj.bio

        # Try to get specific handler first
        handler_cls = cls.CHATJOINREQUESTS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
