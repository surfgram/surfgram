from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ForumTopicCreatedMeta(ABCMeta):
    """Metaclass for ForumTopicCreated classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ForumTopicCreatedsFactory.register_forum_topic_created(new_class)
        return new_class


class ForumTopicCreatedsFactory(TypesFactory):
    """Factory for creating ForumTopicCreated instances."""

    FORUMTOPICCREATEDS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "forum_topic_created"

    @classmethod
    def register_forum_topic_created(cls, forum_topic_created_cls: Type) -> None:
        """Register a new forum_topic_created handler."""
        instance = forum_topic_created_cls()
        for name in instance.__names__:
            cls.FORUMTOPICCREATEDS_REGISTRY[name] = forum_topic_created_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.forum_topic_created
        trigger_value = obj.name
        return cls.FORUMTOPICCREATEDS_REGISTRY.get(trigger_value)()
