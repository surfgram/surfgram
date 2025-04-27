from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ReactionTypeCustomEmojiMeta(ABCMeta):
    """Metaclass for ReactionTypeCustomEmoji classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ReactionTypeCustomEmojisFactory.register_reaction_type_custom_emoji(
                new_class
            )
        return new_class


class ReactionTypeCustomEmojisFactory(TypesFactory):
    """Factory for creating ReactionTypeCustomEmoji instances."""

    REACTIONTYPECUSTOMEMOJIS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "reaction_type_custom_emoji"

    @classmethod
    def register_reaction_type_custom_emoji(
        cls, reaction_type_custom_emoji_cls: Type
    ) -> None:
        """Register a new reaction_type_custom_emoji handler."""
        instance = reaction_type_custom_emoji_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = reaction_type_custom_emoji_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.REACTIONTYPECUSTOMEMOJIS_REGISTRY[name] = (
                        reaction_type_custom_emoji_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.reaction_type_custom_emoji
        trigger_value = obj.type

        # Try to get specific handler first
        handler_cls = cls.REACTIONTYPECUSTOMEMOJIS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
