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
    __type_name__ = "game"

    @classmethod
    def register_game(cls, game_cls: Type) -> None:
        """Register a new game handler."""
        instance = game_cls()
        for name in instance.__names__:
            cls.GAMES_REGISTRY[name] = game_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.game
        trigger_value = obj.title
        return cls.GAMES_REGISTRY.get(trigger_value)()
