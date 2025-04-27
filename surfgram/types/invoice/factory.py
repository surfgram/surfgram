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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "invoice"

    @classmethod
    def register_invoice(cls, invoice_cls: Type) -> None:
        """Register a new invoice handler."""
        instance = invoice_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = invoice_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.INVOICES_REGISTRY[name] = invoice_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.invoice
        trigger_value = obj.title

        # Try to get specific handler first
        handler_cls = cls.INVOICES_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
