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
    __type_name__ = "story_area"

    @classmethod
    def register_story_area(cls, story_area_cls: Type) -> None:
        """Register a new story_area handler."""
        instance = story_area_cls()
        for name in instance.__names__:
            cls.STORYAREAS_REGISTRY[name] = story_area_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.story_area
        trigger_value = obj.position
        return cls.STORYAREAS_REGISTRY.get(trigger_value)()
