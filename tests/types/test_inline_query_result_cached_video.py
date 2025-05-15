import pytest
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

            async def __callback__(self):
                return None

        return ConcreteInlineQueryResultCachedVideo

    def test_concrete_instantiation(self, concrete_inline_query_result_cached_video):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_inline_query_result_cached_video()
        assert isinstance(instance, InlineQueryResultCachedVideo)


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

            async def __callback__(self):
                return None

        InlineQueryResultCachedVideosFactory.register_inline_query_result_cached_video(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_result_cached_video = mocker.MagicMock()
        mock_update.inline_query_result_cached_video.title = "test_trigger"

        result = await InlineQueryResultCachedVideosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_result_cached_video = mocker.MagicMock()
        mock_update.inline_query_result_cached_video.title = "unknown_trigger"

        assert await InlineQueryResultCachedVideosFactory.create(mock_update) is None
