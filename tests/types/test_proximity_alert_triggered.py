import pytest
from surfgram.types.proximity_alert_triggered import ProximityAlertTriggered
from surfgram.types.proximity_alert_triggered.factory import (
    ProximityAlertTriggeredsFactory,
)


class TestProximityAlertTriggered:
    """Tests for ProximityAlertTriggered base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ProximityAlertTriggered()

    @pytest.fixture
    def concrete_proximity_alert_triggered(self):
        """Concrete ProximityAlertTriggered implementation for testing."""

        class ConcreteProximityAlertTriggered(ProximityAlertTriggered):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteProximityAlertTriggered

    def test_concrete_instantiation(self, concrete_proximity_alert_triggered):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_proximity_alert_triggered()
        assert isinstance(instance, ProximityAlertTriggered)


class TestProximityAlertTriggeredsFactory:
    """Tests for ProximityAlertTriggeredsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ProximityAlertTriggeredsFactory.PROXIMITYALERTTRIGGEREDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ProximityAlertTriggered):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ProximityAlertTriggeredsFactory.register_proximity_alert_triggered(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.proximity_alert_triggered = mocker.MagicMock()
        mock_update.proximity_alert_triggered.traveler = "test_trigger"

        result = await ProximityAlertTriggeredsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.proximity_alert_triggered = mocker.MagicMock()
        mock_update.proximity_alert_triggered.traveler = "unknown_trigger"

        assert await ProximityAlertTriggeredsFactory.create(mock_update) is None
