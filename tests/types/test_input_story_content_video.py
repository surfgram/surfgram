import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.input_story_content_video import InputStoryContentVideo
from surfgram.types.input_story_content_video.factory import (
    InputStoryContentVideosFactory,
)


class TestInputStoryContentVideo:
    """Tests for InputStoryContentVideo base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InputStoryContentVideo()

    @pytest.fixture
    def concrete_input_story_content_video(self):
        """Concrete InputStoryContentVideo implementation for testing."""

        class ConcreteInputStoryContentVideo(InputStoryContentVideo):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteInputStoryContentVideo()

    def test_concrete_instantiation(self, concrete_input_story_content_video):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_input_story_content_video, InputStoryContentVideo)


class TestInputStoryContentVideosFactory:
    """Tests for InputStoryContentVideosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InputStoryContentVideosFactory.INPUTSTORYCONTENTVIDEOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InputStoryContentVideo):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        InputStoryContentVideosFactory.register_input_story_content_video(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.input_story_content_video = MagicMock()
        mock_update.input_story_content_video.video = "test_trigger"

        result = await InputStoryContentVideosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.input_story_content_video = MagicMock()
        mock_update.input_story_content_video.video = "unknown_trigger"

        assert await InputStoryContentVideosFactory.create(mock_update) is None
