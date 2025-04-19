from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class TransactionPartnerAffiliateProgramMeta(ABCMeta):
    """Metaclass for TransactionPartnerAffiliateProgram classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            TransactionPartnerAffiliateProgramsFactory.register_transaction_partner_affiliate_program(
                new_class
            )
        return new_class


class TransactionPartnerAffiliateProgramsFactory(TypesFactory):
    """Factory for creating TransactionPartnerAffiliateProgram instances."""

    TRANSACTIONPARTNERAFFILIATEPROGRAMS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "transaction_partner_affiliate_program"

    @classmethod
    def register_transaction_partner_affiliate_program(
        cls, transaction_partner_affiliate_program_cls: Type
    ) -> None:
        """Register a new transaction_partner_affiliate_program handler."""
        instance = transaction_partner_affiliate_program_cls()
        for name in instance.__names__:
            cls.TRANSACTIONPARTNERAFFILIATEPROGRAMS_REGISTRY[name] = (
                transaction_partner_affiliate_program_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.transaction_partner_affiliate_program
        trigger_value = obj.type
        return cls.TRANSACTIONPARTNERAFFILIATEPROGRAMS_REGISTRY.get(trigger_value)()
