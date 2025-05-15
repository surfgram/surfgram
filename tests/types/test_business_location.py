import pytest
from surfgram.types.business_location import BusinessLocation
from surfgram.types.business_location.factory import BusinessLocationsFactory


class TestBusinessLocation:
    """Tests for BusinessLocation base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            BusinessLocation()

    @pytest.fixture
    def concrete_business_location(self):
        """Concrete BusinessLocation implementation for testing."""

        class ConcreteBusinessLocation(BusinessLocation):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteBusinessLocation

    def test_concrete_instantiation(self, concrete_business_location):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_business_location()
        assert isinstance(instance, BusinessLocation)


class TestBusinessLocationsFactory:
    """Tests for BusinessLocationsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BusinessLocationsFactory.BUSINESSLOCATIONS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(BusinessLocation):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        BusinessLocationsFactory.register_business_location(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.business_location = mocker.MagicMock()
        mock_update.business_location.address = "test_trigger"

        result = await BusinessLocationsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.business_location = mocker.MagicMock()
        mock_update.business_location.address = "unknown_trigger"

        assert await BusinessLocationsFactory.create(mock_update) is None
