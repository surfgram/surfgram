import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.document import Document
from surfgram.types.document.factory import DocumentsFactory


class TestDocument:
    """Tests for Document base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            Document()

    @pytest.fixture
    def concrete_document(self):
        """Concrete Document implementation for testing."""

        class ConcreteDocument(Document):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteDocument()

    def test_concrete_instantiation(self, concrete_document):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_document, Document)


class TestDocumentsFactory:
    """Tests for DocumentsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        DocumentsFactory.DOCUMENTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(Document):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        DocumentsFactory.register_document(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.document = MagicMock()
        mock_update.document.mime_type = "test_trigger"

        result = await DocumentsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.document = MagicMock()
        mock_update.document.mime_type = "unknown_trigger"

        assert await DocumentsFactory.create(mock_update) is None
