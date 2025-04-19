import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.video_chat_ended import VideoChatEnded
from surfgram.types.video_chat_ended.factory import VideoChatEndedsFactory


class TestVideoChatEnded:
    """Tests for VideoChatEnded base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            VideoChatEnded()

    @pytest.fixture
    def concrete_video_chat_ended(self):
        """Concrete VideoChatEnded implementation for testing."""

        class ConcreteVideoChatEnded(VideoChatEnded):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteVideoChatEnded()

    def test_concrete_instantiation(self, concrete_video_chat_ended):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_video_chat_ended, VideoChatEnded)


class TestVideoChatEndedsFactory:
    """Tests for VideoChatEndedsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        VideoChatEndedsFactory.VIDEOCHATENDEDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(VideoChatEnded):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        VideoChatEndedsFactory.register_video_chat_ended(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.video_chat_ended = MagicMock()
        mock_update.video_chat_ended.duration = "test_trigger"

        result = await VideoChatEndedsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.video_chat_ended = MagicMock()
        mock_update.video_chat_ended.duration = "unknown_trigger"

        assert await VideoChatEndedsFactory.create(mock_update) is None
