from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class AnimationMeta(ABCMeta):
    """Metaclass for Animation classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            AnimationsFactory.register_animation(new_class)
        return new_class


class AnimationsFactory(TypesFactory):
    """Factory for creating Animation instances."""

    ANIMATIONS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "animation"

    @classmethod
    def register_animation(cls, animation_cls: Type) -> None:
        """Register a new animation handler."""
        instance = animation_cls()
        for name in instance.__names__:
            cls.ANIMATIONS_REGISTRY[name] = animation_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.animation
        trigger_value = obj.mime_type
        return cls.ANIMATIONS_REGISTRY.get(trigger_value)()
