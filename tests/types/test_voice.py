import pytest
from surfgram.types.voice import Voice
from surfgram.types.voice.factory import VoicesFactory


class TestVoice:
    """Tests for Voice base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            Voice()

    @pytest.fixture
    def concrete_voice(self):
        """Concrete Voice implementation for testing."""

        class ConcreteVoice(Voice):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteVoice

    def test_concrete_instantiation(self, concrete_voice):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_voice()
        assert isinstance(instance, Voice)


class TestVoicesFactory:
    """Tests for VoicesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        VoicesFactory.VOICES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(Voice):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        VoicesFactory.register_voice(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.voice = mocker.MagicMock()
        mock_update.voice.mime_type = "test_trigger"

        result = await VoicesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.voice = mocker.MagicMock()
        mock_update.voice.mime_type = "unknown_trigger"

        assert await VoicesFactory.create(mock_update) is None
