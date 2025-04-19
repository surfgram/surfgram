from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatFullInfoMeta(ABCMeta):
    """Metaclass for ChatFullInfo classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatFullInfosFactory.register_chat_full_info(new_class)
        return new_class


class ChatFullInfosFactory(TypesFactory):
    """Factory for creating ChatFullInfo instances."""

    CHATFULLINFOS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "chat_full_info"

    @classmethod
    def register_chat_full_info(cls, chat_full_info_cls: Type) -> None:
        """Register a new chat_full_info handler."""
        instance = chat_full_info_cls()
        for name in instance.__names__:
            cls.CHATFULLINFOS_REGISTRY[name] = chat_full_info_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_full_info
        trigger_value = obj.title
        return cls.CHATFULLINFOS_REGISTRY.get(trigger_value)()
