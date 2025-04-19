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
    __type_name__ = "voice"

    @classmethod
    def register_voice(cls, voice_cls: Type) -> None:
        """Register a new voice handler."""
        instance = voice_cls()
        for name in instance.__names__:
            cls.VOICES_REGISTRY[name] = voice_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.voice
        trigger_value = obj.mime_type
        return cls.VOICES_REGISTRY.get(trigger_value)()
