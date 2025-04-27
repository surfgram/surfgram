from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class MessageOriginHiddenUserMeta(ABCMeta):
    """Metaclass for MessageOriginHiddenUser classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            MessageOriginHiddenUsersFactory.register_message_origin_hidden_user(
                new_class
            )
        return new_class


class MessageOriginHiddenUsersFactory(TypesFactory):
    """Factory for creating MessageOriginHiddenUser instances."""

    MESSAGEORIGINHIDDENUSERS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "message_origin_hidden_user"

    @classmethod
    def register_message_origin_hidden_user(
        cls, message_origin_hidden_user_cls: Type
    ) -> None:
        """Register a new message_origin_hidden_user handler."""
        instance = message_origin_hidden_user_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = message_origin_hidden_user_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.MESSAGEORIGINHIDDENUSERS_REGISTRY[name] = (
                        message_origin_hidden_user_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.message_origin_hidden_user
        trigger_value = obj.type

        # Try to get specific handler first
        handler_cls = cls.MESSAGEORIGINHIDDENUSERS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
