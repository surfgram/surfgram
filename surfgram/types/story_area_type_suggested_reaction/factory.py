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
    __type_name__ = "story_area_type_suggested_reaction"

    @classmethod
    def register_story_area_type_suggested_reaction(
        cls, story_area_type_suggested_reaction_cls: Type
    ) -> None:
        """Register a new story_area_type_suggested_reaction handler."""
        instance = story_area_type_suggested_reaction_cls()
        for name in instance.__names__:
            cls.STORYAREATYPESUGGESTEDREACTIONS_REGISTRY[name] = (
                story_area_type_suggested_reaction_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.story_area_type_suggested_reaction
        trigger_value = obj.type
        return cls.STORYAREATYPESUGGESTEDREACTIONS_REGISTRY.get(trigger_value)()
