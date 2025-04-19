import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.video import Video
from surfgram.types.video.factory import VideosFactory


class TestVideo:
    """Tests for Video base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            Video()

    @pytest.fixture
    def concrete_video(self):
        """Concrete Video implementation for testing."""

        class ConcreteVideo(Video):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteVideo()

    def test_concrete_instantiation(self, concrete_video):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_video, Video)


class TestVideosFactory:
    """Tests for VideosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        VideosFactory.VIDEOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(Video):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        VideosFactory.register_video(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.video = MagicMock()
        mock_update.video.mime_type = "test_trigger"

        result = await VideosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.video = MagicMock()
        mock_update.video.mime_type = "unknown_trigger"

        assert await VideosFactory.create(mock_update) is None
