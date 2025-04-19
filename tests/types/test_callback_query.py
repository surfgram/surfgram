import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.callback_query import CallbackQuery
from surfgram.types.callback_query.factory import CallbackQueriesFactory


class TestCallbackQuery:
    """Tests for CallbackQuery base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            CallbackQuery()

    @pytest.fixture
    def concrete_callback_query(self):
        """Concrete CallbackQuery implementation for testing."""

        class ConcreteCallbackQuery(CallbackQuery):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteCallbackQuery()

    def test_concrete_instantiation(self, concrete_callback_query):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_callback_query, CallbackQuery)


class TestCallbackQueriesFactory:
    """Tests for CallbackQueriesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        CallbackQueriesFactory.CALLBACKQUERIES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(CallbackQuery):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        CallbackQueriesFactory.register_callback_query(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.callback_query = MagicMock()
        mock_update.callback_query.data = "test_trigger"

        result = await CallbackQueriesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.callback_query = MagicMock()
        mock_update.callback_query.data = "unknown_trigger"

        assert await CallbackQueriesFactory.create(mock_update) is None
