import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.business_opening_hours_interval import BusinessOpeningHoursInterval
from surfgram.types.business_opening_hours_interval.factory import (
    BusinessOpeningHoursIntervalsFactory,
)


class TestBusinessOpeningHoursInterval:
    """Tests for BusinessOpeningHoursInterval base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            BusinessOpeningHoursInterval()

    @pytest.fixture
    def concrete_business_opening_hours_interval(self):
        """Concrete BusinessOpeningHoursInterval implementation for testing."""

        class ConcreteBusinessOpeningHoursInterval(BusinessOpeningHoursInterval):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteBusinessOpeningHoursInterval()

    def test_concrete_instantiation(self, concrete_business_opening_hours_interval):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(
            concrete_business_opening_hours_interval, BusinessOpeningHoursInterval
        )


class TestBusinessOpeningHoursIntervalsFactory:
    """Tests for BusinessOpeningHoursIntervalsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BusinessOpeningHoursIntervalsFactory.BUSINESSOPENINGHOURSINTERVALS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(BusinessOpeningHoursInterval):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        BusinessOpeningHoursIntervalsFactory.register_business_opening_hours_interval(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.business_opening_hours_interval = MagicMock()
        mock_update.business_opening_hours_interval.opening_minute = "test_trigger"

        result = await BusinessOpeningHoursIntervalsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.business_opening_hours_interval = MagicMock()
        mock_update.business_opening_hours_interval.opening_minute = "unknown_trigger"

        assert await BusinessOpeningHoursIntervalsFactory.create(mock_update) is None
