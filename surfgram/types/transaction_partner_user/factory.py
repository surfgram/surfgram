from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class TransactionPartnerUserMeta(ABCMeta):
    """Metaclass for TransactionPartnerUser classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            TransactionPartnerUsersFactory.register_transaction_partner_user(new_class)
        return new_class


class TransactionPartnerUsersFactory(TypesFactory):
    """Factory for creating TransactionPartnerUser instances."""

    TRANSACTIONPARTNERUSERS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "transaction_partner_user"

    @classmethod
    def register_transaction_partner_user(
        cls, transaction_partner_user_cls: Type
    ) -> None:
        """Register a new transaction_partner_user handler."""
        instance = transaction_partner_user_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = transaction_partner_user_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.TRANSACTIONPARTNERUSERS_REGISTRY[name] = (
                        transaction_partner_user_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.transaction_partner_user
        trigger_value = obj.invoice_payload

        # Try to get specific handler first
        handler_cls = cls.TRANSACTIONPARTNERUSERS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
