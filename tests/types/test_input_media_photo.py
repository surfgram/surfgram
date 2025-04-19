import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.input_media_photo import InputMediaPhoto
from surfgram.types.input_media_photo.factory import InputMediaPhotosFactory


class TestInputMediaPhoto:
    """Tests for InputMediaPhoto base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InputMediaPhoto()

    @pytest.fixture
    def concrete_input_media_photo(self):
        """Concrete InputMediaPhoto implementation for testing."""

        class ConcreteInputMediaPhoto(InputMediaPhoto):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteInputMediaPhoto()

    def test_concrete_instantiation(self, concrete_input_media_photo):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_input_media_photo, InputMediaPhoto)


class TestInputMediaPhotosFactory:
    """Tests for InputMediaPhotosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InputMediaPhotosFactory.INPUTMEDIAPHOTOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InputMediaPhoto):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        InputMediaPhotosFactory.register_input_media_photo(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.input_media_photo = MagicMock()
        mock_update.input_media_photo.caption = "test_trigger"

        result = await InputMediaPhotosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.input_media_photo = MagicMock()
        mock_update.input_media_photo.caption = "unknown_trigger"

        assert await InputMediaPhotosFactory.create(mock_update) is None
