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
    __type_name__ = "forum_topic_edited"

    @classmethod
    def register_forum_topic_edited(cls, forum_topic_edited_cls: Type) -> None:
        """Register a new forum_topic_edited handler."""
        instance = forum_topic_edited_cls()
        for name in instance.__names__:
            cls.FORUMTOPICEDITEDS_REGISTRY[name] = forum_topic_edited_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.forum_topic_edited
        trigger_value = obj.name
        return cls.FORUMTOPICEDITEDS_REGISTRY.get(trigger_value)()
