from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class TransactionPartnerTelegramApiMeta(ABCMeta):
    """Metaclass for TransactionPartnerTelegramApi classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            TransactionPartnerTelegramApisFactory.register_transaction_partner_telegram_api(
                new_class
            )
        return new_class


class TransactionPartnerTelegramApisFactory(TypesFactory):
    """Factory for creating TransactionPartnerTelegramApi instances."""

    TRANSACTIONPARTNERTELEGRAMAPIS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "transaction_partner_telegram_api"

    @classmethod
    def register_transaction_partner_telegram_api(
        cls, transaction_partner_telegram_api_cls: Type
    ) -> None:
        """Register a new transaction_partner_telegram_api handler."""
        instance = transaction_partner_telegram_api_cls()
        for name in instance.__names__:
            cls.TRANSACTIONPARTNERTELEGRAMAPIS_REGISTRY[name] = (
                transaction_partner_telegram_api_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.transaction_partner_telegram_api
        trigger_value = obj.type
        return cls.TRANSACTIONPARTNERTELEGRAMAPIS_REGISTRY.get(trigger_value)()
