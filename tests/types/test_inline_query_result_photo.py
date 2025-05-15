import pytest
from surfgram.types.inline_query_result_photo import InlineQueryResultPhoto
from surfgram.types.inline_query_result_photo.factory import (
    InlineQueryResultPhotosFactory,
)


class TestInlineQueryResultPhoto:
    """Tests for InlineQueryResultPhoto base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InlineQueryResultPhoto()

    @pytest.fixture
    def concrete_inline_query_result_photo(self):
        """Concrete InlineQueryResultPhoto implementation for testing."""

        class ConcreteInlineQueryResultPhoto(InlineQueryResultPhoto):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInlineQueryResultPhoto

    def test_concrete_instantiation(self, concrete_inline_query_result_photo):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_inline_query_result_photo()
        assert isinstance(instance, InlineQueryResultPhoto)


class TestInlineQueryResultPhotosFactory:
    """Tests for InlineQueryResultPhotosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InlineQueryResultPhotosFactory.INLINEQUERYRESULTPHOTOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InlineQueryResultPhoto):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InlineQueryResultPhotosFactory.register_inline_query_result_photo(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_result_photo = mocker.MagicMock()
        mock_update.inline_query_result_photo.title = "test_trigger"

        result = await InlineQueryResultPhotosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_result_photo = mocker.MagicMock()
        mock_update.inline_query_result_photo.title = "unknown_trigger"

        assert await InlineQueryResultPhotosFactory.create(mock_update) is None
