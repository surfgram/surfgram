import pytest
from surfgram.types.inline_query_result_cached_gif import InlineQueryResultCachedGif
from surfgram.types.inline_query_result_cached_gif.factory import (
    InlineQueryResultCachedGifsFactory,
)


class TestInlineQueryResultCachedGif:
    """Tests for InlineQueryResultCachedGif base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InlineQueryResultCachedGif()

    @pytest.fixture
    def concrete_inline_query_result_cached_gif(self):
        """Concrete InlineQueryResultCachedGif implementation for testing."""

        class ConcreteInlineQueryResultCachedGif(InlineQueryResultCachedGif):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInlineQueryResultCachedGif

    def test_concrete_instantiation(self, concrete_inline_query_result_cached_gif):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_inline_query_result_cached_gif()
        assert isinstance(instance, InlineQueryResultCachedGif)


class TestInlineQueryResultCachedGifsFactory:
    """Tests for InlineQueryResultCachedGifsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InlineQueryResultCachedGifsFactory.INLINEQUERYRESULTCACHEDGIFS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InlineQueryResultCachedGif):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InlineQueryResultCachedGifsFactory.register_inline_query_result_cached_gif(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_result_cached_gif = mocker.MagicMock()
        mock_update.inline_query_result_cached_gif.title = "test_trigger"

        result = await InlineQueryResultCachedGifsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_result_cached_gif = mocker.MagicMock()
        mock_update.inline_query_result_cached_gif.title = "unknown_trigger"

        assert await InlineQueryResultCachedGifsFactory.create(mock_update) is None
