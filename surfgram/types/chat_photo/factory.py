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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "chat_photo"

    @classmethod
    def register_chat_photo(cls, chat_photo_cls: Type) -> None:
        """Register a new chat_photo handler."""
        instance = chat_photo_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = chat_photo_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.CHATPHOTOS_REGISTRY[name] = chat_photo_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.chat_photo
        trigger_value = obj.small_file_id

        # Try to get specific handler first
        handler_cls = cls.CHATPHOTOS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
