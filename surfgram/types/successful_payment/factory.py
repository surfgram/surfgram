from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class SuccessfulPaymentMeta(ABCMeta):
    """Metaclass for SuccessfulPayment classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            SuccessfulPaymentsFactory.register_successful_payment(new_class)
        return new_class


class SuccessfulPaymentsFactory(TypesFactory):
    """Factory for creating SuccessfulPayment instances."""

    SUCCESSFULPAYMENTS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "successful_payment"

    @classmethod
    def register_successful_payment(cls, successful_payment_cls: Type) -> None:
        """Register a new successful_payment handler."""
        instance = successful_payment_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = successful_payment_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.SUCCESSFULPAYMENTS_REGISTRY[name] = successful_payment_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.successful_payment
        trigger_value = obj.invoice_payload

        # Try to get specific handler first
        handler_cls = cls.SUCCESSFULPAYMENTS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
