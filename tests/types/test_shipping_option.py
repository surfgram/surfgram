import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.shipping_option import ShippingOption
from surfgram.types.shipping_option.factory import ShippingOptionsFactory


class TestShippingOption:
    """Tests for ShippingOption base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ShippingOption()

    @pytest.fixture
    def concrete_shipping_option(self):
        """Concrete ShippingOption implementation for testing."""

        class ConcreteShippingOption(ShippingOption):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteShippingOption()

    def test_concrete_instantiation(self, concrete_shipping_option):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_shipping_option, ShippingOption)


class TestShippingOptionsFactory:
    """Tests for ShippingOptionsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ShippingOptionsFactory.SHIPPINGOPTIONS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ShippingOption):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        ShippingOptionsFactory.register_shipping_option(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.shipping_option = MagicMock()
        mock_update.shipping_option.title = "test_trigger"

        result = await ShippingOptionsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.shipping_option = MagicMock()
        mock_update.shipping_option.title = "unknown_trigger"

        assert await ShippingOptionsFactory.create(mock_update) is None
