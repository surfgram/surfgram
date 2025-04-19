import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.pre_checkout_query import PreCheckoutQuery
from surfgram.types.pre_checkout_query.factory import PreCheckoutQueriesFactory


class TestPreCheckoutQuery:
    """Tests for PreCheckoutQuery base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            PreCheckoutQuery()

    @pytest.fixture
    def concrete_pre_checkout_query(self):
        """Concrete PreCheckoutQuery implementation for testing."""

        class ConcretePreCheckoutQuery(PreCheckoutQuery):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcretePreCheckoutQuery()

    def test_concrete_instantiation(self, concrete_pre_checkout_query):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_pre_checkout_query, PreCheckoutQuery)


class TestPreCheckoutQueriesFactory:
    """Tests for PreCheckoutQueriesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        PreCheckoutQueriesFactory.PRECHECKOUTQUERIES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(PreCheckoutQuery):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        PreCheckoutQueriesFactory.register_pre_checkout_query(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.pre_checkout_query = MagicMock()
        mock_update.pre_checkout_query.invoice_payload = "test_trigger"

        result = await PreCheckoutQueriesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.pre_checkout_query = MagicMock()
        mock_update.pre_checkout_query.invoice_payload = "unknown_trigger"

        assert await PreCheckoutQueriesFactory.create(mock_update) is None
