import pytest
from surfgram.types.business_opening_hours import BusinessOpeningHours
from surfgram.types.business_opening_hours.factory import BusinessOpeningHoursFactory


class TestBusinessOpeningHours:
    """Tests for BusinessOpeningHours base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            BusinessOpeningHours()

    @pytest.fixture
    def concrete_business_opening_hours(self):
        """Concrete BusinessOpeningHours implementation for testing."""

        class ConcreteBusinessOpeningHours(BusinessOpeningHours):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteBusinessOpeningHours

    def test_concrete_instantiation(self, concrete_business_opening_hours):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_business_opening_hours()
        assert isinstance(instance, BusinessOpeningHours)


class TestBusinessOpeningHoursFactory:
    """Tests for BusinessOpeningHoursFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BusinessOpeningHoursFactory.BUSINESSOPENINGHOURS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(BusinessOpeningHours):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        BusinessOpeningHoursFactory.register_business_opening_hours(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.business_opening_hours = mocker.MagicMock()
        mock_update.business_opening_hours.time_zone_name = "test_trigger"

        result = await BusinessOpeningHoursFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.business_opening_hours = mocker.MagicMock()
        mock_update.business_opening_hours.time_zone_name = "unknown_trigger"

        assert await BusinessOpeningHoursFactory.create(mock_update) is None
