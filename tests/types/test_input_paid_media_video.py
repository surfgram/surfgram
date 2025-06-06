import pytest
from surfgram.types.input_paid_media_video import InputPaidMediaVideo
from surfgram.types.input_paid_media_video.factory import InputPaidMediaVideosFactory


class TestInputPaidMediaVideo:
    """Tests for InputPaidMediaVideo base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InputPaidMediaVideo()

    @pytest.fixture
    def concrete_input_paid_media_video(self):
        """Concrete InputPaidMediaVideo implementation for testing."""

        class ConcreteInputPaidMediaVideo(InputPaidMediaVideo):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInputPaidMediaVideo

    def test_concrete_instantiation(self, concrete_input_paid_media_video):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_input_paid_media_video()
        assert isinstance(instance, InputPaidMediaVideo)


class TestInputPaidMediaVideosFactory:
    """Tests for InputPaidMediaVideosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InputPaidMediaVideosFactory.INPUTPAIDMEDIAVIDEOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InputPaidMediaVideo):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InputPaidMediaVideosFactory.register_input_paid_media_video(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.input_paid_media_video = mocker.MagicMock()
        mock_update.input_paid_media_video.type = "test_trigger"

        result = await InputPaidMediaVideosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.input_paid_media_video = mocker.MagicMock()
        mock_update.input_paid_media_video.type = "unknown_trigger"

        assert await InputPaidMediaVideosFactory.create(mock_update) is None
