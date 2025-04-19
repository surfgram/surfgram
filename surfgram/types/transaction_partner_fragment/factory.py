from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class TransactionPartnerFragmentMeta(ABCMeta):
    """Metaclass for TransactionPartnerFragment classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            TransactionPartnerFragmentsFactory.register_transaction_partner_fragment(
                new_class
            )
        return new_class


class TransactionPartnerFragmentsFactory(TypesFactory):
    """Factory for creating TransactionPartnerFragment instances."""

    TRANSACTIONPARTNERFRAGMENTS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "transaction_partner_fragment"

    @classmethod
    def register_transaction_partner_fragment(
        cls, transaction_partner_fragment_cls: Type
    ) -> None:
        """Register a new transaction_partner_fragment handler."""
        instance = transaction_partner_fragment_cls()
        for name in instance.__names__:
            cls.TRANSACTIONPARTNERFRAGMENTS_REGISTRY[name] = (
                transaction_partner_fragment_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.transaction_partner_fragment
        trigger_value = obj.type
        return cls.TRANSACTIONPARTNERFRAGMENTS_REGISTRY.get(trigger_value)()
