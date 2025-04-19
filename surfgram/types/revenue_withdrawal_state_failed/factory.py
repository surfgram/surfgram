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
    __type_name__ = "revenue_withdrawal_state_failed"

    @classmethod
    def register_revenue_withdrawal_state_failed(
        cls, revenue_withdrawal_state_failed_cls: Type
    ) -> None:
        """Register a new revenue_withdrawal_state_failed handler."""
        instance = revenue_withdrawal_state_failed_cls()
        for name in instance.__names__:
            cls.REVENUEWITHDRAWALSTATEFAILEDS_REGISTRY[name] = (
                revenue_withdrawal_state_failed_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.revenue_withdrawal_state_failed
        trigger_value = obj.type
        return cls.REVENUEWITHDRAWALSTATEFAILEDS_REGISTRY.get(trigger_value)()
