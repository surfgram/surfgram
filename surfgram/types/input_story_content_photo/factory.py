from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InputStoryContentPhotoMeta(ABCMeta):
    """Metaclass for InputStoryContentPhoto classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InputStoryContentPhotosFactory.register_input_story_content_photo(new_class)
        return new_class


class InputStoryContentPhotosFactory(TypesFactory):
    """Factory for creating InputStoryContentPhoto instances."""

    INPUTSTORYCONTENTPHOTOS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "input_story_content_photo"

    @classmethod
    def register_input_story_content_photo(
        cls, input_story_content_photo_cls: Type
    ) -> None:
        """Register a new input_story_content_photo handler."""
        instance = input_story_content_photo_cls()
        for name in instance.__names__:
            cls.INPUTSTORYCONTENTPHOTOS_REGISTRY[name] = input_story_content_photo_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.input_story_content_photo
        trigger_value = obj.photo
        return cls.INPUTSTORYCONTENTPHOTOS_REGISTRY.get(trigger_value)()
