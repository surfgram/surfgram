from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InputMediaAnimationMeta(ABCMeta):
    """Metaclass for InputMediaAnimation classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InputMediaAnimationsFactory.register_input_media_animation(new_class)
        return new_class


class InputMediaAnimationsFactory(TypesFactory):
    """Factory for creating InputMediaAnimation instances."""

    INPUTMEDIAANIMATIONS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "input_media_animation"

    @classmethod
    def register_input_media_animation(cls, input_media_animation_cls: Type) -> None:
        """Register a new input_media_animation handler."""
        instance = input_media_animation_cls()
        for name in instance.__names__:
            cls.INPUTMEDIAANIMATIONS_REGISTRY[name] = input_media_animation_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.input_media_animation
        trigger_value = obj.caption
        return cls.INPUTMEDIAANIMATIONS_REGISTRY.get(trigger_value)()
