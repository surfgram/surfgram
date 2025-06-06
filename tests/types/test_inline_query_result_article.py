import pytest
from surfgram.types.inline_query_result_article import InlineQueryResultArticle
from surfgram.types.inline_query_result_article.factory import (
    InlineQueryResultArticlesFactory,
)


class TestInlineQueryResultArticle:
    """Tests for InlineQueryResultArticle base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InlineQueryResultArticle()

    @pytest.fixture
    def concrete_inline_query_result_article(self):
        """Concrete InlineQueryResultArticle implementation for testing."""

        class ConcreteInlineQueryResultArticle(InlineQueryResultArticle):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInlineQueryResultArticle

    def test_concrete_instantiation(self, concrete_inline_query_result_article):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_inline_query_result_article()
        assert isinstance(instance, InlineQueryResultArticle)


class TestInlineQueryResultArticlesFactory:
    """Tests for InlineQueryResultArticlesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InlineQueryResultArticlesFactory.INLINEQUERYRESULTARTICLES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InlineQueryResultArticle):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InlineQueryResultArticlesFactory.register_inline_query_result_article(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_result_article = mocker.MagicMock()
        mock_update.inline_query_result_article.title = "test_trigger"

        result = await InlineQueryResultArticlesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_result_article = mocker.MagicMock()
        mock_update.inline_query_result_article.title = "unknown_trigger"

        assert await InlineQueryResultArticlesFactory.create(mock_update) is None
