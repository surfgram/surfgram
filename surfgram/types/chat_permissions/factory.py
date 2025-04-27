from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatPermissionsMeta(ABCMeta):
    """Metaclass for ChatPermissions classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatPermissionsFactory.register_chat_permissions(new_class)
        return new_class


class ChatPermissionsFactory(TypesFactory):
    """Factory for creating ChatPermissions instances."""

    CHATPERMISSIONS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "chat_permissions"

    @classmethod
    def register_chat_permissions(cls, chat_permissions_cls: Type) -> None:
        """Register a new chat_permissions handler."""
        instance = chat_permissions_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = chat_permissions_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.CHATPERMISSIONS_REGISTRY[name] = chat_permissions_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_permissions
        trigger_value = obj.can_send_audios

        # Try to get specific handler first
        handler_cls = cls.CHATPERMISSIONS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
