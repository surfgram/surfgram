import pytest
from surfgram.types.inline_query_result_gif import InlineQueryResultGif
from surfgram.types.inline_query_result_gif.factory import InlineQueryResultGifsFactory


class TestInlineQueryResultGif:
    """Tests for InlineQueryResultGif base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InlineQueryResultGif()

    @pytest.fixture
    def concrete_inline_query_result_gif(self):
        """Concrete InlineQueryResultGif implementation for testing."""

        class ConcreteInlineQueryResultGif(InlineQueryResultGif):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInlineQueryResultGif

    def test_concrete_instantiation(self, concrete_inline_query_result_gif):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_inline_query_result_gif()
        assert isinstance(instance, InlineQueryResultGif)


class TestInlineQueryResultGifsFactory:
    """Tests for InlineQueryResultGifsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InlineQueryResultGifsFactory.INLINEQUERYRESULTGIFS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InlineQueryResultGif):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InlineQueryResultGifsFactory.register_inline_query_result_gif(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_result_gif = mocker.MagicMock()
        mock_update.inline_query_result_gif.title = "test_trigger"

        result = await InlineQueryResultGifsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_result_gif = mocker.MagicMock()
        mock_update.inline_query_result_gif.title = "unknown_trigger"

        assert await InlineQueryResultGifsFactory.create(mock_update) is None
