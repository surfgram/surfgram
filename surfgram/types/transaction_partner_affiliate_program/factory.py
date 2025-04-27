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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "transaction_partner_affiliate_program"

    @classmethod
    def register_transaction_partner_affiliate_program(
        cls, transaction_partner_affiliate_program_cls: Type
    ) -> None:
        """Register a new transaction_partner_affiliate_program handler."""
        instance = transaction_partner_affiliate_program_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = transaction_partner_affiliate_program_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.TRANSACTIONPARTNERAFFILIATEPROGRAMS_REGISTRY[name] = (
                        transaction_partner_affiliate_program_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.transaction_partner_affiliate_program
        trigger_value = obj.type

        # Try to get specific handler first
        handler_cls = cls.TRANSACTIONPARTNERAFFILIATEPROGRAMS_REGISTRY.get(
            trigger_value
        )

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
