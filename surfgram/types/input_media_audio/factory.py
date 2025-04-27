from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InputMediaAudioMeta(ABCMeta):
    """Metaclass for InputMediaAudio classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InputMediaAudiosFactory.register_input_media_audio(new_class)
        return new_class


class InputMediaAudiosFactory(TypesFactory):
    """Factory for creating InputMediaAudio instances."""

    INPUTMEDIAAUDIOS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "input_media_audio"

    @classmethod
    def register_input_media_audio(cls, input_media_audio_cls: Type) -> None:
        """Register a new input_media_audio handler."""
        instance = input_media_audio_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = input_media_audio_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.INPUTMEDIAAUDIOS_REGISTRY[name] = input_media_audio_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.input_media_audio
        trigger_value = obj.caption

        # Try to get specific handler first
        handler_cls = cls.INPUTMEDIAAUDIOS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
