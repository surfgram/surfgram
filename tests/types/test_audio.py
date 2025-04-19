import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.audio import Audio
from surfgram.types.audio.factory import AudioFactory


class TestAudio:
    """Tests for Audio base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            Audio()

    @pytest.fixture
    def concrete_audio(self):
        """Concrete Audio implementation for testing."""

        class ConcreteAudio(Audio):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteAudio()

    def test_concrete_instantiation(self, concrete_audio):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_audio, Audio)


class TestAudioFactory:
    """Tests for AudioFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        AudioFactory.AUDIO_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(Audio):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        AudioFactory.register_audio(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.audio = MagicMock()
        mock_update.audio.title = "test_trigger"

        result = await AudioFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.audio = MagicMock()
        mock_update.audio.title = "unknown_trigger"

        assert await AudioFactory.create(mock_update) is None
