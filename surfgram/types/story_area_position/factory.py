from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class StoryAreaPositionMeta(ABCMeta):
    """Metaclass for StoryAreaPosition classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            StoryAreaPositionsFactory.register_story_area_position(new_class)
        return new_class


class StoryAreaPositionsFactory(TypesFactory):
    """Factory for creating StoryAreaPosition instances."""

    STORYAREAPOSITIONS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "story_area_position"

    @classmethod
    def register_story_area_position(cls, story_area_position_cls: Type) -> None:
        """Register a new story_area_position handler."""
        instance = story_area_position_cls()
        for name in instance.__names__:
            cls.STORYAREAPOSITIONS_REGISTRY[name] = story_area_position_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.story_area_position
        trigger_value = obj.x_percentage
        return cls.STORYAREAPOSITIONS_REGISTRY.get(trigger_value)()
