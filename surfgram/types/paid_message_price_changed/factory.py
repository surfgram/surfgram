from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class PaidMessagePriceChangedMeta(ABCMeta):
    """Metaclass for PaidMessagePriceChanged classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            PaidMessagePriceChangedsFactory.register_paid_message_price_changed(
                new_class
            )
        return new_class


class PaidMessagePriceChangedsFactory(TypesFactory):
    """Factory for creating PaidMessagePriceChanged instances."""

    PAIDMESSAGEPRICECHANGEDS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "paid_message_price_changed"

    @classmethod
    def register_paid_message_price_changed(
        cls, paid_message_price_changed_cls: Type
    ) -> None:
        """Register a new paid_message_price_changed handler."""
        instance = paid_message_price_changed_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = paid_message_price_changed_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.PAIDMESSAGEPRICECHANGEDS_REGISTRY[name] = (
                        paid_message_price_changed_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.paid_message_price_changed
        trigger_value = obj.paid_message_star_count

        # Try to get specific handler first
        handler_cls = cls.PAIDMESSAGEPRICECHANGEDS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
