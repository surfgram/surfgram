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
    __type_name__ = "forum_topic"

    @classmethod
    def register_forum_topic(cls, forum_topic_cls: Type) -> None:
        """Register a new forum_topic handler."""
        instance = forum_topic_cls()
        for name in instance.__names__:
            cls.FORUMTOPICS_REGISTRY[name] = forum_topic_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.forum_topic
        trigger_value = obj.name
        return cls.FORUMTOPICS_REGISTRY.get(trigger_value)()
