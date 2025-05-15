import pytest
from surfgram.types.order_info import OrderInfo
from surfgram.types.order_info.factory import OrderInfosFactory


class TestOrderInfo:
    """Tests for OrderInfo base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            OrderInfo()

    @pytest.fixture
    def concrete_order_info(self):
        """Concrete OrderInfo implementation for testing."""

        class ConcreteOrderInfo(OrderInfo):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteOrderInfo

    def test_concrete_instantiation(self, concrete_order_info):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_order_info()
        assert isinstance(instance, OrderInfo)


class TestOrderInfosFactory:
    """Tests for OrderInfosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        OrderInfosFactory.ORDERINFOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(OrderInfo):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        OrderInfosFactory.register_order_info(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.order_info = mocker.MagicMock()
        mock_update.order_info.phone_number = "test_trigger"

        result = await OrderInfosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.order_info = mocker.MagicMock()
        mock_update.order_info.phone_number = "unknown_trigger"

        assert await OrderInfosFactory.create(mock_update) is None
