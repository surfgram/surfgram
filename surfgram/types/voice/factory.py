from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class VoiceMeta(ABCMeta):
    """Metaclass for Voice classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            VoicesFactory.register_voice(new_class)
        return new_class


class VoicesFactory(TypesFactory):
    """Factory for creating Voice instances."""

    VOICES_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "voice"

    @classmethod
    def register_voice(cls, voice_cls: Type) -> None:
        """Register a new voice handler."""
        instance = voice_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = voice_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.VOICES_REGISTRY[name] = voice_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.voice
        trigger_value = obj.mime_type

        # Try to get specific handler first
        handler_cls = cls.VOICES_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
