import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.inline_query import InlineQuery
from surfgram.types.inline_query.factory import InlineQueriesFactory


class TestInlineQuery:
    """Tests for InlineQuery base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InlineQuery()

    @pytest.fixture
    def concrete_inline_query(self):
        """Concrete InlineQuery implementation for testing."""

        class ConcreteInlineQuery(InlineQuery):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteInlineQuery()

    def test_concrete_instantiation(self, concrete_inline_query):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_inline_query, InlineQuery)


class TestInlineQueriesFactory:
    """Tests for InlineQueriesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InlineQueriesFactory.INLINEQUERIES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InlineQuery):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        InlineQueriesFactory.register_inline_query(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.inline_query = MagicMock()
        mock_update.inline_query.query = "test_trigger"

        result = await InlineQueriesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.inline_query = MagicMock()
        mock_update.inline_query.query = "unknown_trigger"

        assert await InlineQueriesFactory.create(mock_update) is None
