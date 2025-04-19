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
    __type_name__ = "chat_permissions"

    @classmethod
    def register_chat_permissions(cls, chat_permissions_cls: Type) -> None:
        """Register a new chat_permissions handler."""
        instance = chat_permissions_cls()
        for name in instance.__names__:
            cls.CHATPERMISSIONS_REGISTRY[name] = chat_permissions_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_permissions
        trigger_value = obj.can_send_audios
        return cls.CHATPERMISSIONS_REGISTRY.get(trigger_value)()
