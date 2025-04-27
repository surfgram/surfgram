from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InlineQueryResultGifMeta(ABCMeta):
    """Metaclass for InlineQueryResultGif classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InlineQueryResultGifsFactory.register_inline_query_result_gif(new_class)
        return new_class


class InlineQueryResultGifsFactory(TypesFactory):
    """Factory for creating InlineQueryResultGif instances."""

    INLINEQUERYRESULTGIFS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "inline_query_result_gif"

    @classmethod
    def register_inline_query_result_gif(
        cls, inline_query_result_gif_cls: Type
    ) -> None:
        """Register a new inline_query_result_gif handler."""
        instance = inline_query_result_gif_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = inline_query_result_gif_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.INLINEQUERYRESULTGIFS_REGISTRY[name] = (
                        inline_query_result_gif_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.inline_query_result_gif
        trigger_value = obj.title

        # Try to get specific handler first
        handler_cls = cls.INLINEQUERYRESULTGIFS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
