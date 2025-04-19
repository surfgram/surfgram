from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InlineQueryResultGameMeta(ABCMeta):
    """Metaclass for InlineQueryResultGame classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InlineQueryResultGamesFactory.register_inline_query_result_game(new_class)
        return new_class


class InlineQueryResultGamesFactory(TypesFactory):
    """Factory for creating InlineQueryResultGame instances."""

    INLINEQUERYRESULTGAMES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "inline_query_result_game"

    @classmethod
    def register_inline_query_result_game(
        cls, inline_query_result_game_cls: Type
    ) -> None:
        """Register a new inline_query_result_game handler."""
        instance = inline_query_result_game_cls()
        for name in instance.__names__:
            cls.INLINEQUERYRESULTGAMES_REGISTRY[name] = inline_query_result_game_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.inline_query_result_game
        trigger_value = obj.game_short_name
        return cls.INLINEQUERYRESULTGAMES_REGISTRY.get(trigger_value)()
