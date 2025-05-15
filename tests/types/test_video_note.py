import pytest
from surfgram.types.video_note import VideoNote
from surfgram.types.video_note.factory import VideoNotesFactory


class TestVideoNote:
    """Tests for VideoNote base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            VideoNote()

    @pytest.fixture
    def concrete_video_note(self):
        """Concrete VideoNote implementation for testing."""

        class ConcreteVideoNote(VideoNote):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteVideoNote

    def test_concrete_instantiation(self, concrete_video_note):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_video_note()
        assert isinstance(instance, VideoNote)


class TestVideoNotesFactory:
    """Tests for VideoNotesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        VideoNotesFactory.VIDEONOTES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(VideoNote):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        VideoNotesFactory.register_video_note(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.video_note = mocker.MagicMock()
        mock_update.video_note.file_id = "test_trigger"

        result = await VideoNotesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.video_note = mocker.MagicMock()
        mock_update.video_note.file_id = "unknown_trigger"

        assert await VideoNotesFactory.create(mock_update) is None
