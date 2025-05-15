import pytest
from surfgram.types.venue import Venue
from surfgram.types.venue.factory import VenuesFactory


class TestVenue:
    """Tests for Venue base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            Venue()

    @pytest.fixture
    def concrete_venue(self):
        """Concrete Venue implementation for testing."""

        class ConcreteVenue(Venue):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteVenue

    def test_concrete_instantiation(self, concrete_venue):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_venue()
        assert isinstance(instance, Venue)


class TestVenuesFactory:
    """Tests for VenuesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        VenuesFactory.VENUES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(Venue):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        VenuesFactory.register_venue(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.venue = mocker.MagicMock()
        mock_update.venue.title = "test_trigger"

        result = await VenuesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.venue = mocker.MagicMock()
        mock_update.venue.title = "unknown_trigger"

        assert await VenuesFactory.create(mock_update) is None
