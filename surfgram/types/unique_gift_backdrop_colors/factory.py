from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class UniqueGiftBackdropColorsMeta(ABCMeta):
    """Metaclass for UniqueGiftBackdropColors classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            UniqueGiftBackdropColorsFactory.register_unique_gift_backdrop_colors(
                new_class
            )
        return new_class


class UniqueGiftBackdropColorsFactory(TypesFactory):
    """Factory for creating UniqueGiftBackdropColors instances."""

    UNIQUEGIFTBACKDROPCOLORS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "unique_gift_backdrop_colors"

    @classmethod
    def register_unique_gift_backdrop_colors(
        cls, unique_gift_backdrop_colors_cls: Type
    ) -> None:
        """Register a new unique_gift_backdrop_colors handler."""
        instance = unique_gift_backdrop_colors_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = unique_gift_backdrop_colors_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.UNIQUEGIFTBACKDROPCOLORS_REGISTRY[name] = (
                        unique_gift_backdrop_colors_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.unique_gift_backdrop_colors
        trigger_value = obj.text_color

        # Try to get specific handler first
        handler_cls = cls.UNIQUEGIFTBACKDROPCOLORS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
