import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.inline_query_result_cached_audio import InlineQueryResultCachedAudio
from surfgram.types.inline_query_result_cached_audio.factory import (
    InlineQueryResultCachedAudiosFactory,
)


class TestInlineQueryResultCachedAudio:
    """Tests for InlineQueryResultCachedAudio base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InlineQueryResultCachedAudio()

    @pytest.fixture
    def concrete_inline_query_result_cached_audio(self):
        """Concrete InlineQueryResultCachedAudio implementation for testing."""

        class ConcreteInlineQueryResultCachedAudio(InlineQueryResultCachedAudio):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteInlineQueryResultCachedAudio()

    def test_concrete_instantiation(self, concrete_inline_query_result_cached_audio):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(
            concrete_inline_query_result_cached_audio, InlineQueryResultCachedAudio
        )


class TestInlineQueryResultCachedAudiosFactory:
    """Tests for InlineQueryResultCachedAudiosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InlineQueryResultCachedAudiosFactory.INLINEQUERYRESULTCACHEDAUDIOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InlineQueryResultCachedAudio):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        InlineQueryResultCachedAudiosFactory.register_inline_query_result_cached_audio(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.inline_query_result_cached_audio = MagicMock()
        mock_update.inline_query_result_cached_audio.caption = "test_trigger"

        result = await InlineQueryResultCachedAudiosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.inline_query_result_cached_audio = MagicMock()
        mock_update.inline_query_result_cached_audio.caption = "unknown_trigger"

        assert await InlineQueryResultCachedAudiosFactory.create(mock_update) is None
