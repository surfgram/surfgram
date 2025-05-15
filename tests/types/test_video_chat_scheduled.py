import pytest
from surfgram.types.video_chat_scheduled import VideoChatScheduled
from surfgram.types.video_chat_scheduled.factory import VideoChatScheduledsFactory


class TestVideoChatScheduled:
    """Tests for VideoChatScheduled base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            VideoChatScheduled()

    @pytest.fixture
    def concrete_video_chat_scheduled(self):
        """Concrete VideoChatScheduled implementation for testing."""

        class ConcreteVideoChatScheduled(VideoChatScheduled):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteVideoChatScheduled

    def test_concrete_instantiation(self, concrete_video_chat_scheduled):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_video_chat_scheduled()
        assert isinstance(instance, VideoChatScheduled)


class TestVideoChatScheduledsFactory:
    """Tests for VideoChatScheduledsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        VideoChatScheduledsFactory.VIDEOCHATSCHEDULEDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(VideoChatScheduled):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        VideoChatScheduledsFactory.register_video_chat_scheduled(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.video_chat_scheduled = mocker.MagicMock()
        mock_update.video_chat_scheduled.start_date = "test_trigger"

        result = await VideoChatScheduledsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.video_chat_scheduled = mocker.MagicMock()
        mock_update.video_chat_scheduled.start_date = "unknown_trigger"

        assert await VideoChatScheduledsFactory.create(mock_update) is None
