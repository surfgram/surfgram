import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.inline_query_result_cached_document import (
    InlineQueryResultCachedDocument,
)
from surfgram.types.inline_query_result_cached_document.factory import (
    InlineQueryResultCachedDocumentsFactory,
)


class TestInlineQueryResultCachedDocument:
    """Tests for InlineQueryResultCachedDocument base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InlineQueryResultCachedDocument()

    @pytest.fixture
    def concrete_inline_query_result_cached_document(self):
        """Concrete InlineQueryResultCachedDocument implementation for testing."""

        class ConcreteInlineQueryResultCachedDocument(InlineQueryResultCachedDocument):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteInlineQueryResultCachedDocument()

    def test_concrete_instantiation(self, concrete_inline_query_result_cached_document):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(
            concrete_inline_query_result_cached_document,
            InlineQueryResultCachedDocument,
        )


class TestInlineQueryResultCachedDocumentsFactory:
    """Tests for InlineQueryResultCachedDocumentsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InlineQueryResultCachedDocumentsFactory.INLINEQUERYRESULTCACHEDDOCUMENTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InlineQueryResultCachedDocument):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        InlineQueryResultCachedDocumentsFactory.register_inline_query_result_cached_document(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.inline_query_result_cached_document = MagicMock()
        mock_update.inline_query_result_cached_document.title = "test_trigger"

        result = await InlineQueryResultCachedDocumentsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.inline_query_result_cached_document = MagicMock()
        mock_update.inline_query_result_cached_document.title = "unknown_trigger"

        assert await InlineQueryResultCachedDocumentsFactory.create(mock_update) is None
