import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.location import Location
from surfgram.types.location.factory import LocationsFactory


class TestLocation:
    """Tests for Location base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            Location()

    @pytest.fixture
    def concrete_location(self):
        """Concrete Location implementation for testing."""

        class ConcreteLocation(Location):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteLocation()

    def test_concrete_instantiation(self, concrete_location):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_location, Location)


class TestLocationsFactory:
    """Tests for LocationsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        LocationsFactory.LOCATIONS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(Location):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        LocationsFactory.register_location(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.location = MagicMock()
        mock_update.location.latitude = "test_trigger"

        result = await LocationsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.location = MagicMock()
        mock_update.location.latitude = "unknown_trigger"

        assert await LocationsFactory.create(mock_update) is None
