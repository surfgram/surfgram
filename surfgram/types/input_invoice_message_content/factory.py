from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InputInvoiceMessageContentMeta(ABCMeta):
    """Metaclass for InputInvoiceMessageContent classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InputInvoiceMessageContentsFactory.register_input_invoice_message_content(
                new_class
            )
        return new_class


class InputInvoiceMessageContentsFactory(TypesFactory):
    """Factory for creating InputInvoiceMessageContent instances."""

    INPUTINVOICEMESSAGECONTENTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "input_invoice_message_content"

    @classmethod
    def register_input_invoice_message_content(
        cls, input_invoice_message_content_cls: Type
    ) -> None:
        """Register a new input_invoice_message_content handler."""
        instance = input_invoice_message_content_cls()
        for name in instance.__names__:
            cls.INPUTINVOICEMESSAGECONTENTS_REGISTRY[name] = (
                input_invoice_message_content_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.input_invoice_message_content
        trigger_value = obj.title
        return cls.INPUTINVOICEMESSAGECONTENTS_REGISTRY.get(trigger_value)()
