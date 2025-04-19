import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.inline_query_result_cached_voice import InlineQueryResultCachedVoice
from surfgram.types.inline_query_result_cached_voice.factory import (
    InlineQueryResultCachedVoicesFactory,
)


class TestInlineQueryResultCachedVoice:
    """Tests for InlineQueryResultCachedVoice base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InlineQueryResultCachedVoice()

    @pytest.fixture
    def concrete_inline_query_result_cached_voice(self):
        """Concrete InlineQueryResultCachedVoice implementation for testing."""

        class ConcreteInlineQueryResultCachedVoice(InlineQueryResultCachedVoice):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteInlineQueryResultCachedVoice()

    def test_concrete_instantiation(self, concrete_inline_query_result_cached_voice):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(
            concrete_inline_query_result_cached_voice, InlineQueryResultCachedVoice
        )


class TestInlineQueryResultCachedVoicesFactory:
    """Tests for InlineQueryResultCachedVoicesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InlineQueryResultCachedVoicesFactory.INLINEQUERYRESULTCACHEDVOICES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InlineQueryResultCachedVoice):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        InlineQueryResultCachedVoicesFactory.register_inline_query_result_cached_voice(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.inline_query_result_cached_voice = MagicMock()
        mock_update.inline_query_result_cached_voice.title = "test_trigger"

        result = await InlineQueryResultCachedVoicesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.inline_query_result_cached_voice = MagicMock()
        mock_update.inline_query_result_cached_voice.title = "unknown_trigger"

        assert await InlineQueryResultCachedVoicesFactory.create(mock_update) is None
