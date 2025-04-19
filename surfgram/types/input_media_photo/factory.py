from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InputMediaPhotoMeta(ABCMeta):
    """Metaclass for InputMediaPhoto classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InputMediaPhotosFactory.register_input_media_photo(new_class)
        return new_class


class InputMediaPhotosFactory(TypesFactory):
    """Factory for creating InputMediaPhoto instances."""

    INPUTMEDIAPHOTOS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "input_media_photo"

    @classmethod
    def register_input_media_photo(cls, input_media_photo_cls: Type) -> None:
        """Register a new input_media_photo handler."""
        instance = input_media_photo_cls()
        for name in instance.__names__:
            cls.INPUTMEDIAPHOTOS_REGISTRY[name] = input_media_photo_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.input_media_photo
        trigger_value = obj.caption
        return cls.INPUTMEDIAPHOTOS_REGISTRY.get(trigger_value)()
