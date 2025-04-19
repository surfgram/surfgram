from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatAdministratorRightsMeta(ABCMeta):
    """Metaclass for ChatAdministratorRights classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatAdministratorRightsFactory.register_chat_administrator_rights(new_class)
        return new_class


class ChatAdministratorRightsFactory(TypesFactory):
    """Factory for creating ChatAdministratorRights instances."""

    CHATADMINISTRATORRIGHTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "chat_administrator_rights"

    @classmethod
    def register_chat_administrator_rights(
        cls, chat_administrator_rights_cls: Type
    ) -> None:
        """Register a new chat_administrator_rights handler."""
        instance = chat_administrator_rights_cls()
        for name in instance.__names__:
            cls.CHATADMINISTRATORRIGHTS_REGISTRY[name] = chat_administrator_rights_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_administrator_rights
        trigger_value = obj.can_manage_video_chats
        return cls.CHATADMINISTRATORRIGHTS_REGISTRY.get(trigger_value)()
