import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.inline_query_result_voice import InlineQueryResultVoice
from surfgram.types.inline_query_result_voice.factory import (
    InlineQueryResultVoicesFactory,
)


class TestInlineQueryResultVoice:
    """Tests for InlineQueryResultVoice base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InlineQueryResultVoice()

    @pytest.fixture
    def concrete_inline_query_result_voice(self):
        """Concrete InlineQueryResultVoice implementation for testing."""

        class ConcreteInlineQueryResultVoice(InlineQueryResultVoice):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteInlineQueryResultVoice()

    def test_concrete_instantiation(self, concrete_inline_query_result_voice):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_inline_query_result_voice, InlineQueryResultVoice)


class TestInlineQueryResultVoicesFactory:
    """Tests for InlineQueryResultVoicesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InlineQueryResultVoicesFactory.INLINEQUERYRESULTVOICES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InlineQueryResultVoice):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        InlineQueryResultVoicesFactory.register_inline_query_result_voice(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.inline_query_result_voice = MagicMock()
        mock_update.inline_query_result_voice.title = "test_trigger"

        result = await InlineQueryResultVoicesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.inline_query_result_voice = MagicMock()
        mock_update.inline_query_result_voice.title = "unknown_trigger"

        assert await InlineQueryResultVoicesFactory.create(mock_update) is None
