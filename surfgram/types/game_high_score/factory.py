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
    __type_name__ = "game_high_score"

    @classmethod
    def register_game_high_score(cls, game_high_score_cls: Type) -> None:
        """Register a new game_high_score handler."""
        instance = game_high_score_cls()
        for name in instance.__names__:
            cls.GAMEHIGHSCORES_REGISTRY[name] = game_high_score_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.game_high_score
        trigger_value = obj.position
        return cls.GAMEHIGHSCORES_REGISTRY.get(trigger_value)()
