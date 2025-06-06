import pytest
from surfgram.types.inline_query_result_cached_audio import InlineQueryResultCachedAudio
from surfgram.types.inline_query_result_cached_audio.factory import (
    InlineQueryResultCachedAudiosFactory,
)


class TestInlineQueryResultCachedAudio:
    """Tests for InlineQueryResultCachedAudio base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InlineQueryResultCachedAudio()

    @pytest.fixture
    def concrete_inline_query_result_cached_audio(self):
        """Concrete InlineQueryResultCachedAudio implementation for testing."""

        class ConcreteInlineQueryResultCachedAudio(InlineQueryResultCachedAudio):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInlineQueryResultCachedAudio

    def test_concrete_instantiation(self, concrete_inline_query_result_cached_audio):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_inline_query_result_cached_audio()
        assert isinstance(instance, InlineQueryResultCachedAudio)


class TestInlineQueryResultCachedAudiosFactory:
    """Tests for InlineQueryResultCachedAudiosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InlineQueryResultCachedAudiosFactory.INLINEQUERYRESULTCACHEDAUDIOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InlineQueryResultCachedAudio):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InlineQueryResultCachedAudiosFactory.register_inline_query_result_cached_audio(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_result_cached_audio = mocker.MagicMock()
        mock_update.inline_query_result_cached_audio.caption = "test_trigger"

        result = await InlineQueryResultCachedAudiosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_result_cached_audio = mocker.MagicMock()
        mock_update.inline_query_result_cached_audio.caption = "unknown_trigger"

        assert await InlineQueryResultCachedAudiosFactory.create(mock_update) is None
