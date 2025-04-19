from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ChatPhotoMeta(ABCMeta):
    """Metaclass for ChatPhoto classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ChatPhotosFactory.register_chat_photo(new_class)
        return new_class


class ChatPhotosFactory(TypesFactory):
    """Factory for creating ChatPhoto instances."""

    CHATPHOTOS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "chat_photo"

    @classmethod
    def register_chat_photo(cls, chat_photo_cls: Type) -> None:
        """Register a new chat_photo handler."""
        instance = chat_photo_cls()
        for name in instance.__names__:
            cls.CHATPHOTOS_REGISTRY[name] = chat_photo_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_photo
        trigger_value = obj.small_file_id
        return cls.CHATPHOTOS_REGISTRY.get(trigger_value)()
