from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class StickerMeta(ABCMeta):
    """Metaclass for Sticker classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            StickersFactory.register_sticker(new_class)
        return new_class


class StickersFactory(TypesFactory):
    """Factory for creating Sticker instances."""

    STICKERS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "sticker"

    @classmethod
    def register_sticker(cls, sticker_cls: Type) -> None:
        """Register a new sticker handler."""
        instance = sticker_cls()
        for name in instance.__names__:
            cls.STICKERS_REGISTRY[name] = sticker_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.sticker
        trigger_value = obj.is_video
        return cls.STICKERS_REGISTRY.get(trigger_value)()
