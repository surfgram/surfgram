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
    __type_name__ = "input_media_audio"

    @classmethod
    def register_input_media_audio(cls, input_media_audio_cls: Type) -> None:
        """Register a new input_media_audio handler."""
        instance = input_media_audio_cls()
        for name in instance.__names__:
            cls.INPUTMEDIAAUDIOS_REGISTRY[name] = input_media_audio_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.input_media_audio
        trigger_value = obj.caption
        return cls.INPUTMEDIAAUDIOS_REGISTRY.get(trigger_value)()
