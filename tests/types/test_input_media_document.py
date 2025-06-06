import pytest
from surfgram.types.input_media_document import InputMediaDocument
from surfgram.types.input_media_document.factory import InputMediaDocumentsFactory


class TestInputMediaDocument:
    """Tests for InputMediaDocument base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InputMediaDocument()

    @pytest.fixture
    def concrete_input_media_document(self):
        """Concrete InputMediaDocument implementation for testing."""

        class ConcreteInputMediaDocument(InputMediaDocument):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInputMediaDocument

    def test_concrete_instantiation(self, concrete_input_media_document):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_input_media_document()
        assert isinstance(instance, InputMediaDocument)


class TestInputMediaDocumentsFactory:
    """Tests for InputMediaDocumentsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InputMediaDocumentsFactory.INPUTMEDIADOCUMENTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InputMediaDocument):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InputMediaDocumentsFactory.register_input_media_document(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.input_media_document = mocker.MagicMock()
        mock_update.input_media_document.caption = "test_trigger"

        result = await InputMediaDocumentsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.input_media_document = mocker.MagicMock()
        mock_update.input_media_document.caption = "unknown_trigger"

        assert await InputMediaDocumentsFactory.create(mock_update) is None
