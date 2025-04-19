from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class RevenueWithdrawalStatePendingMeta(ABCMeta):
    """Metaclass for RevenueWithdrawalStatePending classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            RevenueWithdrawalStatePendingsFactory.register_revenue_withdrawal_state_pending(
                new_class
            )
        return new_class


class RevenueWithdrawalStatePendingsFactory(TypesFactory):
    """Factory for creating RevenueWithdrawalStatePending instances."""

    REVENUEWITHDRAWALSTATEPENDINGS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "revenue_withdrawal_state_pending"

    @classmethod
    def register_revenue_withdrawal_state_pending(
        cls, revenue_withdrawal_state_pending_cls: Type
    ) -> None:
        """Register a new revenue_withdrawal_state_pending handler."""
        instance = revenue_withdrawal_state_pending_cls()
        for name in instance.__names__:
            cls.REVENUEWITHDRAWALSTATEPENDINGS_REGISTRY[name] = (
                revenue_withdrawal_state_pending_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.revenue_withdrawal_state_pending
        trigger_value = obj.type
        return cls.REVENUEWITHDRAWALSTATEPENDINGS_REGISTRY.get(trigger_value)()
