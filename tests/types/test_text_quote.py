import pytest
from surfgram.types.text_quote import TextQuote
from surfgram.types.text_quote.factory import TextQuotesFactory


class TestTextQuote:
    """Tests for TextQuote base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            TextQuote()

    @pytest.fixture
    def concrete_text_quote(self):
        """Concrete TextQuote implementation for testing."""

        class ConcreteTextQuote(TextQuote):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteTextQuote

    def test_concrete_instantiation(self, concrete_text_quote):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_text_quote()
        assert isinstance(instance, TextQuote)


class TestTextQuotesFactory:
    """Tests for TextQuotesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        TextQuotesFactory.TEXTQUOTES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(TextQuote):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        TextQuotesFactory.register_text_quote(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.text_quote = mocker.MagicMock()
        mock_update.text_quote.text = "test_trigger"

        result = await TextQuotesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.text_quote = mocker.MagicMock()
        mock_update.text_quote.text = "unknown_trigger"

        assert await TextQuotesFactory.create(mock_update) is None
