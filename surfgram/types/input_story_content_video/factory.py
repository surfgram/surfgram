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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "input_story_content_video"

    @classmethod
    def register_input_story_content_video(
        cls, input_story_content_video_cls: Type
    ) -> None:
        """Register a new input_story_content_video handler."""
        instance = input_story_content_video_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = input_story_content_video_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.INPUTSTORYCONTENTVIDEOS_REGISTRY[name] = (
                        input_story_content_video_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.input_story_content_video
        trigger_value = obj.video

        # Try to get specific handler first
        handler_cls = cls.INPUTSTORYCONTENTVIDEOS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
