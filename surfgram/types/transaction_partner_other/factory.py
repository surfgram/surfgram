from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class TransactionPartnerOtherMeta(ABCMeta):
    """Metaclass for TransactionPartnerOther classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            TransactionPartnerOthersFactory.register_transaction_partner_other(
                new_class
            )
        return new_class


class TransactionPartnerOthersFactory(TypesFactory):
    """Factory for creating TransactionPartnerOther instances."""

    TRANSACTIONPARTNEROTHERS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "transaction_partner_other"

    @classmethod
    def register_transaction_partner_other(
        cls, transaction_partner_other_cls: Type
    ) -> None:
        """Register a new transaction_partner_other handler."""
        instance = transaction_partner_other_cls()
        for name in instance.__names__:
            cls.TRANSACTIONPARTNEROTHERS_REGISTRY[name] = transaction_partner_other_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.transaction_partner_other
        trigger_value = obj.type
        return cls.TRANSACTIONPARTNEROTHERS_REGISTRY.get(trigger_value)()
