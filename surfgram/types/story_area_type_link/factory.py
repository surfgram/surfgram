from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class StoryAreaTypeLinkMeta(ABCMeta):
    """Metaclass for StoryAreaTypeLink classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            StoryAreaTypeLinksFactory.register_story_area_type_link(new_class)
        return new_class


class StoryAreaTypeLinksFactory(TypesFactory):
    """Factory for creating StoryAreaTypeLink instances."""

    STORYAREATYPELINKS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "story_area_type_link"

    @classmethod
    def register_story_area_type_link(cls, story_area_type_link_cls: Type) -> None:
        """Register a new story_area_type_link handler."""
        instance = story_area_type_link_cls()
        for name in instance.__names__:
            cls.STORYAREATYPELINKS_REGISTRY[name] = story_area_type_link_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.story_area_type_link
        trigger_value = obj.type
        return cls.STORYAREATYPELINKS_REGISTRY.get(trigger_value)()
