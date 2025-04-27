from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class AudioMeta(ABCMeta):
    """Metaclass for Audio classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            AudioFactory.register_audio(new_class)
        return new_class


class AudioFactory(TypesFactory):
    """Factory for creating Audio instances."""

    AUDIO_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "audio"

    @classmethod
    def register_audio(cls, audio_cls: Type) -> None:
        """Register a new audio handler."""
        instance = audio_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = audio_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.AUDIO_REGISTRY[name] = audio_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.audio
        trigger_value = obj.title

        # Try to get specific handler first
        handler_cls = cls.AUDIO_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
