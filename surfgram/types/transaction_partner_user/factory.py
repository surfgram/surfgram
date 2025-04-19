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
    __type_name__ = "transaction_partner_user"

    @classmethod
    def register_transaction_partner_user(
        cls, transaction_partner_user_cls: Type
    ) -> None:
        """Register a new transaction_partner_user handler."""
        instance = transaction_partner_user_cls()
        for name in instance.__names__:
            cls.TRANSACTIONPARTNERUSERS_REGISTRY[name] = transaction_partner_user_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.transaction_partner_user
        trigger_value = obj.invoice_payload
        return cls.TRANSACTIONPARTNERUSERS_REGISTRY.get(trigger_value)()
