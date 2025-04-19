from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class StoryMeta(ABCMeta):
    """Metaclass for Story classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            StoriesFactory.register_story(new_class)
        return new_class


class StoriesFactory(TypesFactory):
    """Factory for creating Story instances."""

    STORIES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "story"

    @classmethod
    def register_story(cls, story_cls: Type) -> None:
        """Register a new story handler."""
        instance = story_cls()
        for name in instance.__names__:
            cls.STORIES_REGISTRY[name] = story_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.story
        trigger_value = obj.chat
        return cls.STORIES_REGISTRY.get(trigger_value)()
