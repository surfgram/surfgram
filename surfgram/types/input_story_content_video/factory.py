from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InputStoryContentVideoMeta(ABCMeta):
    """Metaclass for InputStoryContentVideo classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InputStoryContentVideosFactory.register_input_story_content_video(new_class)
        return new_class


class InputStoryContentVideosFactory(TypesFactory):
    """Factory for creating InputStoryContentVideo instances."""

    INPUTSTORYCONTENTVIDEOS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "input_story_content_video"

    @classmethod
    def register_input_story_content_video(
        cls, input_story_content_video_cls: Type
    ) -> None:
        """Register a new input_story_content_video handler."""
        instance = input_story_content_video_cls()
        for name in instance.__names__:
            cls.INPUTSTORYCONTENTVIDEOS_REGISTRY[name] = input_story_content_video_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.input_story_content_video
        trigger_value = obj.video
        return cls.INPUTSTORYCONTENTVIDEOS_REGISTRY.get(trigger_value)()
