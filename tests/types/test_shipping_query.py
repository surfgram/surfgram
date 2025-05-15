import pytest
from surfgram.types.shipping_query import ShippingQuery
from surfgram.types.shipping_query.factory import ShippingQueriesFactory


class TestShippingQuery:
    """Tests for ShippingQuery base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ShippingQuery()

    @pytest.fixture
    def concrete_shipping_query(self):
        """Concrete ShippingQuery implementation for testing."""

        class ConcreteShippingQuery(ShippingQuery):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteShippingQuery

    def test_concrete_instantiation(self, concrete_shipping_query):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_shipping_query()
        assert isinstance(instance, ShippingQuery)


class TestShippingQueriesFactory:
    """Tests for ShippingQueriesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ShippingQueriesFactory.SHIPPINGQUERIES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ShippingQuery):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ShippingQueriesFactory.register_shipping_query(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.shipping_query = mocker.MagicMock()
        mock_update.shipping_query.invoice_payload = "test_trigger"

        result = await ShippingQueriesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.shipping_query = mocker.MagicMock()
        mock_update.shipping_query.invoice_payload = "unknown_trigger"

        assert await ShippingQueriesFactory.create(mock_update) is None
