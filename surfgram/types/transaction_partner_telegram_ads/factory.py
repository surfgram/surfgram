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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "transaction_partner_telegram_ads"

    @classmethod
    def register_transaction_partner_telegram_ads(
        cls, transaction_partner_telegram_ads_cls: Type
    ) -> None:
        """Register a new transaction_partner_telegram_ads handler."""
        instance = transaction_partner_telegram_ads_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = transaction_partner_telegram_ads_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.TRANSACTIONPARTNERTELEGRAMADS_REGISTRY[name] = (
                        transaction_partner_telegram_ads_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.transaction_partner_telegram_ads
        trigger_value = obj.type

        # Try to get specific handler first
        handler_cls = cls.TRANSACTIONPARTNERTELEGRAMADS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
