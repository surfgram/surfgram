import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.inline_query_result_document import InlineQueryResultDocument
from surfgram.types.inline_query_result_document.factory import (
    InlineQueryResultDocumentsFactory,
)


class TestInlineQueryResultDocument:
    """Tests for InlineQueryResultDocument base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InlineQueryResultDocument()

    @pytest.fixture
    def concrete_inline_query_result_document(self):
        """Concrete InlineQueryResultDocument implementation for testing."""

        class ConcreteInlineQueryResultDocument(InlineQueryResultDocument):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteInlineQueryResultDocument()

    def test_concrete_instantiation(self, concrete_inline_query_result_document):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(
            concrete_inline_query_result_document, InlineQueryResultDocument
        )


class TestInlineQueryResultDocumentsFactory:
    """Tests for InlineQueryResultDocumentsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InlineQueryResultDocumentsFactory.INLINEQUERYRESULTDOCUMENTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InlineQueryResultDocument):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        InlineQueryResultDocumentsFactory.register_inline_query_result_document(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.inline_query_result_document = MagicMock()
        mock_update.inline_query_result_document.title = "test_trigger"

        result = await InlineQueryResultDocumentsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.inline_query_result_document = MagicMock()
        mock_update.inline_query_result_document.title = "unknown_trigger"

        assert await InlineQueryResultDocumentsFactory.create(mock_update) is None
