from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class StoryAreaTypeLocationMeta(ABCMeta):
    """Metaclass for StoryAreaTypeLocation classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            StoryAreaTypeLocationsFactory.register_story_area_type_location(new_class)
        return new_class


class StoryAreaTypeLocationsFactory(TypesFactory):
    """Factory for creating StoryAreaTypeLocation instances."""

    STORYAREATYPELOCATIONS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "story_area_type_location"

    @classmethod
    def register_story_area_type_location(
        cls, story_area_type_location_cls: Type
    ) -> None:
        """Register a new story_area_type_location handler."""
        instance = story_area_type_location_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = story_area_type_location_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.STORYAREATYPELOCATIONS_REGISTRY[name] = (
                        story_area_type_location_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.story_area_type_location
        trigger_value = obj.address

        # Try to get specific handler first
        handler_cls = cls.STORYAREATYPELOCATIONS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
