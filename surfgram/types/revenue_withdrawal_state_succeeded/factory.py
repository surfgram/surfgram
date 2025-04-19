from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class RevenueWithdrawalStateSucceededMeta(ABCMeta):
    """Metaclass for RevenueWithdrawalStateSucceeded classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            RevenueWithdrawalStateSucceededsFactory.register_revenue_withdrawal_state_succeeded(
                new_class
            )
        return new_class


class RevenueWithdrawalStateSucceededsFactory(TypesFactory):
    """Factory for creating RevenueWithdrawalStateSucceeded instances."""

    REVENUEWITHDRAWALSTATESUCCEEDEDS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "revenue_withdrawal_state_succeeded"

    @classmethod
    def register_revenue_withdrawal_state_succeeded(
        cls, revenue_withdrawal_state_succeeded_cls: Type
    ) -> None:
        """Register a new revenue_withdrawal_state_succeeded handler."""
        instance = revenue_withdrawal_state_succeeded_cls()
        for name in instance.__names__:
            cls.REVENUEWITHDRAWALSTATESUCCEEDEDS_REGISTRY[name] = (
                revenue_withdrawal_state_succeeded_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.revenue_withdrawal_state_succeeded
        trigger_value = obj.type
        return cls.REVENUEWITHDRAWALSTATESUCCEEDEDS_REGISTRY.get(trigger_value)()
