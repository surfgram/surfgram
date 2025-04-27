from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ForumTopicEditedMeta(ABCMeta):
    """Metaclass for ForumTopicEdited classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ForumTopicEditedsFactory.register_forum_topic_edited(new_class)
        return new_class


class ForumTopicEditedsFactory(TypesFactory):
    """Factory for creating ForumTopicEdited instances."""

    FORUMTOPICEDITEDS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "forum_topic_edited"

    @classmethod
    def register_forum_topic_edited(cls, forum_topic_edited_cls: Type) -> None:
        """Register a new forum_topic_edited handler."""
        instance = forum_topic_edited_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = forum_topic_edited_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.FORUMTOPICEDITEDS_REGISTRY[name] = forum_topic_edited_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.forum_topic_edited
        trigger_value = obj.name

        # Try to get specific handler first
        handler_cls = cls.FORUMTOPICEDITEDS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
