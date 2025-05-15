import pytest
from surfgram.types.inline_query_result_video import InlineQueryResultVideo
from surfgram.types.inline_query_result_video.factory import (
    InlineQueryResultVideosFactory,
)


class TestInlineQueryResultVideo:
    """Tests for InlineQueryResultVideo base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InlineQueryResultVideo()

    @pytest.fixture
    def concrete_inline_query_result_video(self):
        """Concrete InlineQueryResultVideo implementation for testing."""

        class ConcreteInlineQueryResultVideo(InlineQueryResultVideo):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInlineQueryResultVideo

    def test_concrete_instantiation(self, concrete_inline_query_result_video):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_inline_query_result_video()
        assert isinstance(instance, InlineQueryResultVideo)


class TestInlineQueryResultVideosFactory:
    """Tests for InlineQueryResultVideosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InlineQueryResultVideosFactory.INLINEQUERYRESULTVIDEOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InlineQueryResultVideo):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InlineQueryResultVideosFactory.register_inline_query_result_video(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_result_video = mocker.MagicMock()
        mock_update.inline_query_result_video.mime_type = "test_trigger"

        result = await InlineQueryResultVideosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_result_video = mocker.MagicMock()
        mock_update.inline_query_result_video.mime_type = "unknown_trigger"

        assert await InlineQueryResultVideosFactory.create(mock_update) is None
