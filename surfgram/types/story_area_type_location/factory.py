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
    __type_name__ = "story_area_type_location"

    @classmethod
    def register_story_area_type_location(
        cls, story_area_type_location_cls: Type
    ) -> None:
        """Register a new story_area_type_location handler."""
        instance = story_area_type_location_cls()
        for name in instance.__names__:
            cls.STORYAREATYPELOCATIONS_REGISTRY[name] = story_area_type_location_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.story_area_type_location
        trigger_value = obj.address
        return cls.STORYAREATYPELOCATIONS_REGISTRY.get(trigger_value)()
