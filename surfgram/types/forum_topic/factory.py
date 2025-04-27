from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ForumTopicMeta(ABCMeta):
    """Metaclass for ForumTopic classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ForumTopicsFactory.register_forum_topic(new_class)
        return new_class


class ForumTopicsFactory(TypesFactory):
    """Factory for creating ForumTopic instances."""

    FORUMTOPICS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "forum_topic"

    @classmethod
    def register_forum_topic(cls, forum_topic_cls: Type) -> None:
        """Register a new forum_topic handler."""
        instance = forum_topic_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = forum_topic_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.FORUMTOPICS_REGISTRY[name] = forum_topic_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.forum_topic
        trigger_value = obj.name

        # Try to get specific handler first
        handler_cls = cls.FORUMTOPICS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
