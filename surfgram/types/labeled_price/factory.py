from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class LabeledPriceMeta(ABCMeta):
    """Metaclass for LabeledPrice classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            LabeledPricesFactory.register_labeled_price(new_class)
        return new_class


class LabeledPricesFactory(TypesFactory):
    """Factory for creating LabeledPrice instances."""

    LABELEDPRICES_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "labeled_price"

    @classmethod
    def register_labeled_price(cls, labeled_price_cls: Type) -> None:
        """Register a new labeled_price handler."""
        instance = labeled_price_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = labeled_price_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.LABELEDPRICES_REGISTRY[name] = labeled_price_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.labeled_price
        trigger_value = obj.label

        # Try to get specific handler first
        handler_cls = cls.LABELEDPRICES_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
