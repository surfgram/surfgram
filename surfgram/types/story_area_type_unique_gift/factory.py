from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class StoryAreaTypeUniqueGiftMeta(ABCMeta):
    """Metaclass for StoryAreaTypeUniqueGift classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            StoryAreaTypeUniqueGiftsFactory.register_story_area_type_unique_gift(
                new_class
            )
        return new_class


class StoryAreaTypeUniqueGiftsFactory(TypesFactory):
    """Factory for creating StoryAreaTypeUniqueGift instances."""

    STORYAREATYPEUNIQUEGIFTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "story_area_type_unique_gift"

    @classmethod
    def register_story_area_type_unique_gift(
        cls, story_area_type_unique_gift_cls: Type
    ) -> None:
        """Register a new story_area_type_unique_gift handler."""
        instance = story_area_type_unique_gift_cls()
        for name in instance.__names__:
            cls.STORYAREATYPEUNIQUEGIFTS_REGISTRY[name] = (
                story_area_type_unique_gift_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.story_area_type_unique_gift
        trigger_value = obj.type
        return cls.STORYAREATYPEUNIQUEGIFTS_REGISTRY.get(trigger_value)()
