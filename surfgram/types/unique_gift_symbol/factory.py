from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class UniqueGiftSymbolMeta(ABCMeta):
    """Metaclass for UniqueGiftSymbol classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            UniqueGiftSymbolsFactory.register_unique_gift_symbol(new_class)
        return new_class


class UniqueGiftSymbolsFactory(TypesFactory):
    """Factory for creating UniqueGiftSymbol instances."""

    UNIQUEGIFTSYMBOLS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "unique_gift_symbol"

    @classmethod
    def register_unique_gift_symbol(cls, unique_gift_symbol_cls: Type) -> None:
        """Register a new unique_gift_symbol handler."""
        instance = unique_gift_symbol_cls()
        for name in instance.__names__:
            cls.UNIQUEGIFTSYMBOLS_REGISTRY[name] = unique_gift_symbol_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.unique_gift_symbol
        trigger_value = obj.sticker
        return cls.UNIQUEGIFTSYMBOLS_REGISTRY.get(trigger_value)()
