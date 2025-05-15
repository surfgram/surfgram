import pytest
from surfgram.types.location_address import LocationAddress
from surfgram.types.location_address.factory import LocationAddressesFactory


class TestLocationAddress:
    """Tests for LocationAddress base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            LocationAddress()

    @pytest.fixture
    def concrete_location_address(self):
        """Concrete LocationAddress implementation for testing."""

        class ConcreteLocationAddress(LocationAddress):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteLocationAddress

    def test_concrete_instantiation(self, concrete_location_address):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_location_address()
        assert isinstance(instance, LocationAddress)


class TestLocationAddressesFactory:
    """Tests for LocationAddressesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        LocationAddressesFactory.LOCATIONADDRESSES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(LocationAddress):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        LocationAddressesFactory.register_location_address(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.location_address = mocker.MagicMock()
        mock_update.location_address.country_code = "test_trigger"

        result = await LocationAddressesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.location_address = mocker.MagicMock()
        mock_update.location_address.country_code = "unknown_trigger"

        assert await LocationAddressesFactory.create(mock_update) is None
