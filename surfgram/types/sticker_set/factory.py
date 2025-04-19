from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class StickerSetMeta(ABCMeta):
    """Metaclass for StickerSet classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            StickerSetsFactory.register_sticker_set(new_class)
        return new_class


class StickerSetsFactory(TypesFactory):
    """Factory for creating StickerSet instances."""

    STICKERSETS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "sticker_set"

    @classmethod
    def register_sticker_set(cls, sticker_set_cls: Type) -> None:
        """Register a new sticker_set handler."""
        instance = sticker_set_cls()
        for name in instance.__names__:
            cls.STICKERSETS_REGISTRY[name] = sticker_set_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.sticker_set
        trigger_value = obj.title
        return cls.STICKERSETS_REGISTRY.get(trigger_value)()
