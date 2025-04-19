from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InlineQueryResultsButtonMeta(ABCMeta):
    """Metaclass for InlineQueryResultsButton classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InlineQueryResultsButtonsFactory.register_inline_query_results_button(
                new_class
            )
        return new_class


class InlineQueryResultsButtonsFactory(TypesFactory):
    """Factory for creating InlineQueryResultsButton instances."""

    INLINEQUERYRESULTSBUTTONS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "inline_query_results_button"

    @classmethod
    def register_inline_query_results_button(
        cls, inline_query_results_button_cls: Type
    ) -> None:
        """Register a new inline_query_results_button handler."""
        instance = inline_query_results_button_cls()
        for name in instance.__names__:
            cls.INLINEQUERYRESULTSBUTTONS_REGISTRY[name] = (
                inline_query_results_button_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.inline_query_results_button
        trigger_value = obj.text
        return cls.INLINEQUERYRESULTSBUTTONS_REGISTRY.get(trigger_value)()
