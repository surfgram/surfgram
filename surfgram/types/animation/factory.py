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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "animation"

    @classmethod
    def register_animation(cls, animation_cls: Type) -> None:
        """Register a new animation handler."""
        instance = animation_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = animation_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.ANIMATIONS_REGISTRY[name] = animation_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.animation
        trigger_value = obj.mime_type

        # Try to get specific handler first
        handler_cls = cls.ANIMATIONS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
