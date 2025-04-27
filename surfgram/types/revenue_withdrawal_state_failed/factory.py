from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class RevenueWithdrawalStateFailedMeta(ABCMeta):
    """Metaclass for RevenueWithdrawalStateFailed classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            RevenueWithdrawalStateFailedsFactory.register_revenue_withdrawal_state_failed(
                new_class
            )
        return new_class


class RevenueWithdrawalStateFailedsFactory(TypesFactory):
    """Factory for creating RevenueWithdrawalStateFailed instances."""

    REVENUEWITHDRAWALSTATEFAILEDS_REGISTRY: Dict[str, Type] = {}
    __fallback_handler__: Optional[Type] = None
    __type_name__ = "revenue_withdrawal_state_failed"

    @classmethod
    def register_revenue_withdrawal_state_failed(
        cls, revenue_withdrawal_state_failed_cls: Type
    ) -> None:
        """Register a new revenue_withdrawal_state_failed handler."""
        instance = revenue_withdrawal_state_failed_cls()
        names = instance.__names__

        # Check if should be registered as fallback handler
        if not names or None in names or "" in names:
            cls.__fallback_handler__ = revenue_withdrawal_state_failed_cls
        else:
            for name in names:
                if name:  # Skip empty/None names
                    cls.REVENUEWITHDRAWALSTATEFAILEDS_REGISTRY[name] = (
                        revenue_withdrawal_state_failed_cls
                    )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.revenue_withdrawal_state_failed
        trigger_value = obj.type

        # Try to get specific handler first
        handler_cls = cls.REVENUEWITHDRAWALSTATEFAILEDS_REGISTRY.get(trigger_value)

        # If no specific handler found, use fallback if available
        if handler_cls is None and cls.__fallback_handler__:
            handler_cls = cls.__fallback_handler__

        return handler_cls() if handler_cls else None
