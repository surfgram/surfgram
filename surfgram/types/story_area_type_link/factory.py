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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "story_area_type_link"

    @classmethod
    def register_story_area_type_link(cls, story_area_type_link_cls: Type) -> None:
        """Register a new story_area_type_link handler."""
        instance = story_area_type_link_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = story_area_type_link_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.STORYAREATYPELINKS_REGISTRY[name] = story_area_type_link_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.story_area_type_link
        trigger_value = obj.type

        # Try to get specific handler first
        handler_cls = cls.STORYAREATYPELINKS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
