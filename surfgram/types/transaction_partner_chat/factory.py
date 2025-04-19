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
    __type_name__ = "transaction_partner_chat"

    @classmethod
    def register_transaction_partner_chat(
        cls, transaction_partner_chat_cls: Type
    ) -> None:
        """Register a new transaction_partner_chat handler."""
        instance = transaction_partner_chat_cls()
        for name in instance.__names__:
            cls.TRANSACTIONPARTNERCHATS_REGISTRY[name] = transaction_partner_chat_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.transaction_partner_chat
        trigger_value = obj.type
        return cls.TRANSACTIONPARTNERCHATS_REGISTRY.get(trigger_value)()
