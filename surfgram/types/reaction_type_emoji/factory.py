from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ReactionTypeEmojiMeta(ABCMeta):
    """Metaclass for ReactionTypeEmoji classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ReactionTypeEmojisFactory.register_reaction_type_emoji(new_class)
        return new_class


class ReactionTypeEmojisFactory(TypesFactory):
    """Factory for creating ReactionTypeEmoji instances."""

    REACTIONTYPEEMOJIS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "reaction_type_emoji"

    @classmethod
    def register_reaction_type_emoji(cls, reaction_type_emoji_cls: Type) -> None:
        """Register a new reaction_type_emoji handler."""
        instance = reaction_type_emoji_cls()
        for name in instance.__names__:
            cls.REACTIONTYPEEMOJIS_REGISTRY[name] = reaction_type_emoji_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.reaction_type_emoji
        trigger_value = obj.type
        return cls.REACTIONTYPEEMOJIS_REGISTRY.get(trigger_value)()
