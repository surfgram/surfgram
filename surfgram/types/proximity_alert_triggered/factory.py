from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class ProximityAlertTriggeredMeta(ABCMeta):
    """Metaclass for ProximityAlertTriggered classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            ProximityAlertTriggeredsFactory.register_proximity_alert_triggered(
                new_class
            )
        return new_class


class ProximityAlertTriggeredsFactory(TypesFactory):
    """Factory for creating ProximityAlertTriggered instances."""

    PROXIMITYALERTTRIGGEREDS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "proximity_alert_triggered"

    @classmethod
    def register_proximity_alert_triggered(
        cls, proximity_alert_triggered_cls: Type
    ) -> None:
        """Register a new proximity_alert_triggered handler."""
        instance = proximity_alert_triggered_cls()
        for name in instance.__names__:
            cls.PROXIMITYALERTTRIGGEREDS_REGISTRY[name] = proximity_alert_triggered_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.proximity_alert_triggered
        trigger_value = obj.traveler
        return cls.PROXIMITYALERTTRIGGEREDS_REGISTRY.get(trigger_value)()
