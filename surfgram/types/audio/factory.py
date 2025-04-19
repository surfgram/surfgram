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
    __type_name__ = "audio"

    @classmethod
    def register_audio(cls, audio_cls: Type) -> None:
        """Register a new audio handler."""
        instance = audio_cls()
        for name in instance.__names__:
            cls.AUDIO_REGISTRY[name] = audio_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.audio
        trigger_value = obj.title
        return cls.AUDIO_REGISTRY.get(trigger_value)()
