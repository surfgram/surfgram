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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "story"

    @classmethod
    def register_story(cls, story_cls: Type) -> None:
        """Register a new story handler."""
        instance = story_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = story_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.STORIES_REGISTRY[name] = story_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.story
        trigger_value = obj.chat

        # Try to get specific handler first
        handler_cls = cls.STORIES_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
