from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InputProfilePhotoAnimatedMeta(ABCMeta):
    """Metaclass for InputProfilePhotoAnimated classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InputProfilePhotoAnimatedsFactory.register_input_profile_photo_animated(
                new_class
            )
        return new_class


class InputProfilePhotoAnimatedsFactory(TypesFactory):
    """Factory for creating InputProfilePhotoAnimated instances."""

    INPUTPROFILEPHOTOANIMATEDS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "input_profile_photo_animated"

    @classmethod
    def register_input_profile_photo_animated(
        cls, input_profile_photo_animated_cls: Type
    ) -> None:
        """Register a new input_profile_photo_animated handler."""
        instance = input_profile_photo_animated_cls()
        for name in instance.__names__:
            cls.INPUTPROFILEPHOTOANIMATEDS_REGISTRY[name] = (
                input_profile_photo_animated_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.input_profile_photo_animated
        trigger_value = obj.type
        return cls.INPUTPROFILEPHOTOANIMATEDS_REGISTRY.get(trigger_value)()
