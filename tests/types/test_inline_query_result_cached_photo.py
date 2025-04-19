import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.inline_query_result_cached_photo import InlineQueryResultCachedPhoto
from surfgram.types.inline_query_result_cached_photo.factory import (
    InlineQueryResultCachedPhotosFactory,
)


class TestInlineQueryResultCachedPhoto:
    """Tests for InlineQueryResultCachedPhoto base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InlineQueryResultCachedPhoto()

    @pytest.fixture
    def concrete_inline_query_result_cached_photo(self):
        """Concrete InlineQueryResultCachedPhoto implementation for testing."""

        class ConcreteInlineQueryResultCachedPhoto(InlineQueryResultCachedPhoto):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteInlineQueryResultCachedPhoto()

    def test_concrete_instantiation(self, concrete_inline_query_result_cached_photo):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(
            concrete_inline_query_result_cached_photo, InlineQueryResultCachedPhoto
        )


class TestInlineQueryResultCachedPhotosFactory:
    """Tests for InlineQueryResultCachedPhotosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InlineQueryResultCachedPhotosFactory.INLINEQUERYRESULTCACHEDPHOTOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InlineQueryResultCachedPhoto):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        InlineQueryResultCachedPhotosFactory.register_inline_query_result_cached_photo(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.inline_query_result_cached_photo = MagicMock()
        mock_update.inline_query_result_cached_photo.title = "test_trigger"

        result = await InlineQueryResultCachedPhotosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.inline_query_result_cached_photo = MagicMock()
        mock_update.inline_query_result_cached_photo.title = "unknown_trigger"

        assert await InlineQueryResultCachedPhotosFactory.create(mock_update) is None
