from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class GameHighScoreMeta(ABCMeta):
    """Metaclass for GameHighScore classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            GameHighScoresFactory.register_game_high_score(new_class)
        return new_class


class GameHighScoresFactory(TypesFactory):
    """Factory for creating GameHighScore instances."""

    GAMEHIGHSCORES_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "game_high_score"

    @classmethod
    def register_game_high_score(cls, game_high_score_cls: Type) -> None:
        """Register a new game_high_score handler."""
        instance = game_high_score_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = game_high_score_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.GAMEHIGHSCORES_REGISTRY[name] = game_high_score_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.game_high_score
        trigger_value = obj.position

        # Try to get specific handler first
        handler_cls = cls.GAMEHIGHSCORES_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
