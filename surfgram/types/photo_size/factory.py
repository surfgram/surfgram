from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class PhotoSizeMeta(ABCMeta):
    """Metaclass for PhotoSize classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            PhotoSizesFactory.register_photo_size(new_class)
        return new_class


class PhotoSizesFactory(TypesFactory):
    """Factory for creating PhotoSize instances."""

    PHOTOSIZES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "photo_size"

    @classmethod
    def register_photo_size(cls, photo_size_cls: Type) -> None:
        """Register a new photo_size handler."""
        instance = photo_size_cls()
        for name in instance.__names__:
            cls.PHOTOSIZES_REGISTRY[name] = photo_size_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.photo_size
        trigger_value = obj.file_id
        return cls.PHOTOSIZES_REGISTRY.get(trigger_value)()
