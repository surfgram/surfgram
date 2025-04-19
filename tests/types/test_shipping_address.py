import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.shipping_address import ShippingAddress
from surfgram.types.shipping_address.factory import ShippingAddressesFactory


class TestShippingAddress:
    """Tests for ShippingAddress base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ShippingAddress()

    @pytest.fixture
    def concrete_shipping_address(self):
        """Concrete ShippingAddress implementation for testing."""

        class ConcreteShippingAddress(ShippingAddress):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteShippingAddress()

    def test_concrete_instantiation(self, concrete_shipping_address):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_shipping_address, ShippingAddress)


class TestShippingAddressesFactory:
    """Tests for ShippingAddressesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ShippingAddressesFactory.SHIPPINGADDRESSES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ShippingAddress):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        ShippingAddressesFactory.register_shipping_address(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.shipping_address = MagicMock()
        mock_update.shipping_address.country_code = "test_trigger"

        result = await ShippingAddressesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.shipping_address = MagicMock()
        mock_update.shipping_address.country_code = "unknown_trigger"

        assert await ShippingAddressesFactory.create(mock_update) is None
