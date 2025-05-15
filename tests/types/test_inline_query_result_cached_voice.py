import pytest
from surfgram.types.inline_query_result_cached_voice import InlineQueryResultCachedVoice
from surfgram.types.inline_query_result_cached_voice.factory import (
    InlineQueryResultCachedVoicesFactory,
)


class TestInlineQueryResultCachedVoice:
    """Tests for InlineQueryResultCachedVoice base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InlineQueryResultCachedVoice()

    @pytest.fixture
    def concrete_inline_query_result_cached_voice(self):
        """Concrete InlineQueryResultCachedVoice implementation for testing."""

        class ConcreteInlineQueryResultCachedVoice(InlineQueryResultCachedVoice):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInlineQueryResultCachedVoice

    def test_concrete_instantiation(self, concrete_inline_query_result_cached_voice):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_inline_query_result_cached_voice()
        assert isinstance(instance, InlineQueryResultCachedVoice)


class TestInlineQueryResultCachedVoicesFactory:
    """Tests for InlineQueryResultCachedVoicesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InlineQueryResultCachedVoicesFactory.INLINEQUERYRESULTCACHEDVOICES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InlineQueryResultCachedVoice):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InlineQueryResultCachedVoicesFactory.register_inline_query_result_cached_voice(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_result_cached_voice = mocker.MagicMock()
        mock_update.inline_query_result_cached_voice.title = "test_trigger"

        result = await InlineQueryResultCachedVoicesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_result_cached_voice = mocker.MagicMock()
        mock_update.inline_query_result_cached_voice.title = "unknown_trigger"

        assert await InlineQueryResultCachedVoicesFactory.create(mock_update) is None
