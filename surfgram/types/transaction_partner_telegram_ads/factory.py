from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class TransactionPartnerTelegramAdsMeta(ABCMeta):
    """Metaclass for TransactionPartnerTelegramAds classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            TransactionPartnerTelegramAdsFactory.register_transaction_partner_telegram_ads(
                new_class
            )
        return new_class


class TransactionPartnerTelegramAdsFactory(TypesFactory):
    """Factory for creating TransactionPartnerTelegramAds instances."""

    TRANSACTIONPARTNERTELEGRAMADS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "transaction_partner_telegram_ads"

    @classmethod
    def register_transaction_partner_telegram_ads(
        cls, transaction_partner_telegram_ads_cls: Type
    ) -> None:
        """Register a new transaction_partner_telegram_ads handler."""
        instance = transaction_partner_telegram_ads_cls()
        for name in instance.__names__:
            cls.TRANSACTIONPARTNERTELEGRAMADS_REGISTRY[name] = (
                transaction_partner_telegram_ads_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.transaction_partner_telegram_ads
        trigger_value = obj.type
        return cls.TRANSACTIONPARTNERTELEGRAMADS_REGISTRY.get(trigger_value)()
