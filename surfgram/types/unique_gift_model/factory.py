from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class UniqueGiftModelMeta(ABCMeta):
    """Metaclass for UniqueGiftModel classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            UniqueGiftModelsFactory.register_unique_gift_model(new_class)
        return new_class


class UniqueGiftModelsFactory(TypesFactory):
    """Factory for creating UniqueGiftModel instances."""

    UNIQUEGIFTMODELS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "unique_gift_model"

    @classmethod
    def register_unique_gift_model(cls, unique_gift_model_cls: Type) -> None:
        """Register a new unique_gift_model handler."""
        instance = unique_gift_model_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = unique_gift_model_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.UNIQUEGIFTMODELS_REGISTRY[name] = unique_gift_model_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.unique_gift_model
        trigger_value = obj.sticker

        # Try to get specific handler first
        handler_cls = cls.UNIQUEGIFTMODELS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
