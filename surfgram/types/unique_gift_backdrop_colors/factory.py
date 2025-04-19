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
    __type_name__ = "unique_gift_backdrop_colors"

    @classmethod
    def register_unique_gift_backdrop_colors(
        cls, unique_gift_backdrop_colors_cls: Type
    ) -> None:
        """Register a new unique_gift_backdrop_colors handler."""
        instance = unique_gift_backdrop_colors_cls()
        for name in instance.__names__:
            cls.UNIQUEGIFTBACKDROPCOLORS_REGISTRY[name] = (
                unique_gift_backdrop_colors_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.unique_gift_backdrop_colors
        trigger_value = obj.text_color
        return cls.UNIQUEGIFTBACKDROPCOLORS_REGISTRY.get(trigger_value)()
