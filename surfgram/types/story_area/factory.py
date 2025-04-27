from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class StoryAreaMeta(ABCMeta):
    """Metaclass for StoryArea classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            StoryAreasFactory.register_story_area(new_class)
        return new_class


class StoryAreasFactory(TypesFactory):
    """Factory for creating StoryArea instances."""

    STORYAREAS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "story_area"

    @classmethod
    def register_story_area(cls, story_area_cls: Type) -> None:
        """Register a new story_area handler."""
        instance = story_area_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = story_area_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.STORYAREAS_REGISTRY[name] = story_area_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.story_area
        trigger_value = obj.position

        # Try to get specific handler first
        handler_cls = cls.STORYAREAS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
