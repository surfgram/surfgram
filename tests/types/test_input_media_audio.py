import pytest
from surfgram.types.input_media_audio import InputMediaAudio
from surfgram.types.input_media_audio.factory import InputMediaAudiosFactory


class TestInputMediaAudio:
    """Tests for InputMediaAudio base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InputMediaAudio()

    @pytest.fixture
    def concrete_input_media_audio(self):
        """Concrete InputMediaAudio implementation for testing."""

        class ConcreteInputMediaAudio(InputMediaAudio):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInputMediaAudio

    def test_concrete_instantiation(self, concrete_input_media_audio):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_input_media_audio()
        assert isinstance(instance, InputMediaAudio)


class TestInputMediaAudiosFactory:
    """Tests for InputMediaAudiosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InputMediaAudiosFactory.INPUTMEDIAAUDIOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InputMediaAudio):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InputMediaAudiosFactory.register_input_media_audio(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.input_media_audio = mocker.MagicMock()
        mock_update.input_media_audio.caption = "test_trigger"

        result = await InputMediaAudiosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.input_media_audio = mocker.MagicMock()
        mock_update.input_media_audio.caption = "unknown_trigger"

        assert await InputMediaAudiosFactory.create(mock_update) is None
