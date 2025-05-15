import pytest
from surfgram.types.input_media_video import InputMediaVideo
from surfgram.types.input_media_video.factory import InputMediaVideosFactory


class TestInputMediaVideo:
    """Tests for InputMediaVideo base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InputMediaVideo()

    @pytest.fixture
    def concrete_input_media_video(self):
        """Concrete InputMediaVideo implementation for testing."""

        class ConcreteInputMediaVideo(InputMediaVideo):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInputMediaVideo

    def test_concrete_instantiation(self, concrete_input_media_video):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_input_media_video()
        assert isinstance(instance, InputMediaVideo)


class TestInputMediaVideosFactory:
    """Tests for InputMediaVideosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InputMediaVideosFactory.INPUTMEDIAVIDEOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InputMediaVideo):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InputMediaVideosFactory.register_input_media_video(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.input_media_video = mocker.MagicMock()
        mock_update.input_media_video.caption = "test_trigger"

        result = await InputMediaVideosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.input_media_video = mocker.MagicMock()
        mock_update.input_media_video.caption = "unknown_trigger"

        assert await InputMediaVideosFactory.create(mock_update) is None
