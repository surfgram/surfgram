from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class GameMeta(ABCMeta):
    """Metaclass for Game classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            GamesFactory.register_game(new_class)
        return new_class


class GamesFactory(TypesFactory):
    """Factory for creating Game instances."""

    GAMES_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "game"

    @classmethod
    def register_game(cls, game_cls: Type) -> None:
        """Register a new game handler."""
        instance = game_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = game_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.GAMES_REGISTRY[name] = game_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.game
        trigger_value = obj.title

        # Try to get specific handler first
        handler_cls = cls.GAMES_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
