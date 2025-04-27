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
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "star_transactions"

    @classmethod
    def register_star_transactions(cls, star_transactions_cls: Type) -> None:
        """Register a new star_transactions handler."""
        instance = star_transactions_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = star_transactions_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.STARTRANSACTIONS_REGISTRY[name] = star_transactions_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.star_transactions
        trigger_value = obj.transactions

        # Try to get specific handler first
        handler_cls = cls.STARTRANSACTIONS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
