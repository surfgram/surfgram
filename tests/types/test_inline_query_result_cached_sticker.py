import pytest
from surfgram.types.inline_query_result_cached_sticker import (
    InlineQueryResultCachedSticker,
)
from surfgram.types.inline_query_result_cached_sticker.factory import (
    InlineQueryResultCachedStickersFactory,
)


class TestInlineQueryResultCachedSticker:
    """Tests for InlineQueryResultCachedSticker base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InlineQueryResultCachedSticker()

    @pytest.fixture
    def concrete_inline_query_result_cached_sticker(self):
        """Concrete InlineQueryResultCachedSticker implementation for testing."""

        class ConcreteInlineQueryResultCachedSticker(InlineQueryResultCachedSticker):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInlineQueryResultCachedSticker

    def test_concrete_instantiation(self, concrete_inline_query_result_cached_sticker):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_inline_query_result_cached_sticker()
        assert isinstance(instance, InlineQueryResultCachedSticker)


class TestInlineQueryResultCachedStickersFactory:
    """Tests for InlineQueryResultCachedStickersFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InlineQueryResultCachedStickersFactory.INLINEQUERYRESULTCACHEDSTICKERS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InlineQueryResultCachedSticker):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InlineQueryResultCachedStickersFactory.register_inline_query_result_cached_sticker(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_result_cached_sticker = mocker.MagicMock()
        mock_update.inline_query_result_cached_sticker.sticker_file_id = "test_trigger"

        result = await InlineQueryResultCachedStickersFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_result_cached_sticker = mocker.MagicMock()
        mock_update.inline_query_result_cached_sticker.sticker_file_id = (
            "unknown_trigger"
        )

        assert await InlineQueryResultCachedStickersFactory.create(mock_update) is None
