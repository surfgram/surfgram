from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class TransactionPartnerChatMeta(ABCMeta):
    """Metaclass for TransactionPartnerChat classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            TransactionPartnerChatsFactory.register_transaction_partner_chat(new_class)
        return new_class


class TransactionPartnerChatsFactory(TypesFactory):
    """Factory for creating TransactionPartnerChat instances."""

    TRANSACTIONPARTNERCHATS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "transaction_partner_chat"

    @classmethod
    def register_transaction_partner_chat(
        cls, transaction_partner_chat_cls: Type
    ) -> None:
        """Register a new transaction_partner_chat handler."""
        instance = transaction_partner_chat_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = transaction_partner_chat_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.TRANSACTIONPARTNERCHATS_REGISTRY[name] = (
                        transaction_partner_chat_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.transaction_partner_chat
        trigger_value = obj.type

        # Try to get specific handler first
        handler_cls = cls.TRANSACTIONPARTNERCHATS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
