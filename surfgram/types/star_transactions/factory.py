from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class StarTransactionsMeta(ABCMeta):
    """Metaclass for StarTransactions classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            StarTransactionsFactory.register_star_transactions(new_class)
        return new_class


class StarTransactionsFactory(TypesFactory):
    """Factory for creating StarTransactions instances."""

    STARTRANSACTIONS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "star_transactions"

    @classmethod
    def register_star_transactions(cls, star_transactions_cls: Type) -> None:
        """Register a new star_transactions handler."""
        instance = star_transactions_cls()
        for name in instance.__names__:
            cls.STARTRANSACTIONS_REGISTRY[name] = star_transactions_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.star_transactions
        trigger_value = obj.transactions
        return cls.STARTRANSACTIONS_REGISTRY.get(trigger_value)()
