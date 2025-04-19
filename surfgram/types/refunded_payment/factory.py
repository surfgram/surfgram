from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class RefundedPaymentMeta(ABCMeta):
    """Metaclass for RefundedPayment classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            RefundedPaymentsFactory.register_refunded_payment(new_class)
        return new_class


class RefundedPaymentsFactory(TypesFactory):
    """Factory for creating RefundedPayment instances."""

    REFUNDEDPAYMENTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "refunded_payment"

    @classmethod
    def register_refunded_payment(cls, refunded_payment_cls: Type) -> None:
        """Register a new refunded_payment handler."""
        instance = refunded_payment_cls()
        for name in instance.__names__:
            cls.REFUNDEDPAYMENTS_REGISTRY[name] = refunded_payment_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.refunded_payment
        trigger_value = obj.invoice_payload
        return cls.REFUNDEDPAYMENTS_REGISTRY.get(trigger_value)()
