import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.inline_query_result_location import InlineQueryResultLocation
from surfgram.types.inline_query_result_location.factory import (
    InlineQueryResultLocationsFactory,
)


class TestInlineQueryResultLocation:
    """Tests for InlineQueryResultLocation base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InlineQueryResultLocation()

    @pytest.fixture
    def concrete_inline_query_result_location(self):
        """Concrete InlineQueryResultLocation implementation for testing."""

        class ConcreteInlineQueryResultLocation(InlineQueryResultLocation):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteInlineQueryResultLocation()

    def test_concrete_instantiation(self, concrete_inline_query_result_location):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(
            concrete_inline_query_result_location, InlineQueryResultLocation
        )


class TestInlineQueryResultLocationsFactory:
    """Tests for InlineQueryResultLocationsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InlineQueryResultLocationsFactory.INLINEQUERYRESULTLOCATIONS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InlineQueryResultLocation):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        InlineQueryResultLocationsFactory.register_inline_query_result_location(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.inline_query_result_location = MagicMock()
        mock_update.inline_query_result_location.title = "test_trigger"

        result = await InlineQueryResultLocationsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.inline_query_result_location = MagicMock()
        mock_update.inline_query_result_location.title = "unknown_trigger"

        assert await InlineQueryResultLocationsFactory.create(mock_update) is None
