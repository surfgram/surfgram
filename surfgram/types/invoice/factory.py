from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InvoiceMeta(ABCMeta):
    """Metaclass for Invoice classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InvoicesFactory.register_invoice(new_class)
        return new_class


class InvoicesFactory(TypesFactory):
    """Factory for creating Invoice instances."""

    INVOICES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "invoice"

    @classmethod
    def register_invoice(cls, invoice_cls: Type) -> None:
        """Register a new invoice handler."""
        instance = invoice_cls()
        for name in instance.__names__:
            cls.INVOICES_REGISTRY[name] = invoice_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.invoice
        trigger_value = obj.title
        return cls.INVOICES_REGISTRY.get(trigger_value)()
