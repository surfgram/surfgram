from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class StoryAreaTypeSuggestedReactionMeta(ABCMeta):
    """Metaclass for StoryAreaTypeSuggestedReaction classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            StoryAreaTypeSuggestedReactionsFactory.register_story_area_type_suggested_reaction(
                new_class
            )
        return new_class


class StoryAreaTypeSuggestedReactionsFactory(TypesFactory):
    """Factory for creating StoryAreaTypeSuggestedReaction instances."""

    STORYAREATYPESUGGESTEDREACTIONS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "story_area_type_suggested_reaction"

    @classmethod
    def register_story_area_type_suggested_reaction(
        cls, story_area_type_suggested_reaction_cls: Type
    ) -> None:
        """Register a new story_area_type_suggested_reaction handler."""
        instance = story_area_type_suggested_reaction_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = story_area_type_suggested_reaction_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.STORYAREATYPESUGGESTEDREACTIONS_REGISTRY[name] = (
                        story_area_type_suggested_reaction_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.story_area_type_suggested_reaction
        trigger_value = obj.type

        # Try to get specific handler first
        handler_cls = cls.STORYAREATYPESUGGESTEDREACTIONS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
