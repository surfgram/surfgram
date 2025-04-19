import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.inline_query_result_cached_video import InlineQueryResultCachedVideo
from surfgram.types.inline_query_result_cached_video.factory import (
    InlineQueryResultCachedVideosFactory,
)


class TestInlineQueryResultCachedVideo:
    """Tests for InlineQueryResultCachedVideo base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InlineQueryResultCachedVideo()

    @pytest.fixture
    def concrete_inline_query_result_cached_video(self):
        """Concrete InlineQueryResultCachedVideo implementation for testing."""

        class ConcreteInlineQueryResultCachedVideo(InlineQueryResultCachedVideo):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteInlineQueryResultCachedVideo()

    def test_concrete_instantiation(self, concrete_inline_query_result_cached_video):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(
            concrete_inline_query_result_cached_video, InlineQueryResultCachedVideo
        )


class TestInlineQueryResultCachedVideosFactory:
    """Tests for InlineQueryResultCachedVideosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InlineQueryResultCachedVideosFactory.INLINEQUERYRESULTCACHEDVIDEOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InlineQueryResultCachedVideo):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        InlineQueryResultCachedVideosFactory.register_inline_query_result_cached_video(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.inline_query_result_cached_video = MagicMock()
        mock_update.inline_query_result_cached_video.title = "test_trigger"

        result = await InlineQueryResultCachedVideosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.inline_query_result_cached_video = MagicMock()
        mock_update.inline_query_result_cached_video.title = "unknown_trigger"

        assert await InlineQueryResultCachedVideosFactory.create(mock_update) is None
