import pytest
from surfgram.types.inline_query_result_audio import InlineQueryResultAudio
from surfgram.types.inline_query_result_audio.factory import (
    InlineQueryResultAudiosFactory,
)


class TestInlineQueryResultAudio:
    """Tests for InlineQueryResultAudio base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InlineQueryResultAudio()

    @pytest.fixture
    def concrete_inline_query_result_audio(self):
        """Concrete InlineQueryResultAudio implementation for testing."""

        class ConcreteInlineQueryResultAudio(InlineQueryResultAudio):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInlineQueryResultAudio

    def test_concrete_instantiation(self, concrete_inline_query_result_audio):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_inline_query_result_audio()
        assert isinstance(instance, InlineQueryResultAudio)


class TestInlineQueryResultAudiosFactory:
    """Tests for InlineQueryResultAudiosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InlineQueryResultAudiosFactory.INLINEQUERYRESULTAUDIOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InlineQueryResultAudio):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InlineQueryResultAudiosFactory.register_inline_query_result_audio(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_result_audio = mocker.MagicMock()
        mock_update.inline_query_result_audio.title = "test_trigger"

        result = await InlineQueryResultAudiosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_result_audio = mocker.MagicMock()
        mock_update.inline_query_result_audio.title = "unknown_trigger"

        assert await InlineQueryResultAudiosFactory.create(mock_update) is None
