import pytest
from surfgram.types.input_story_content_photo import InputStoryContentPhoto
from surfgram.types.input_story_content_photo.factory import (
    InputStoryContentPhotosFactory,
)


class TestInputStoryContentPhoto:
    """Tests for InputStoryContentPhoto base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InputStoryContentPhoto()

    @pytest.fixture
    def concrete_input_story_content_photo(self):
        """Concrete InputStoryContentPhoto implementation for testing."""

        class ConcreteInputStoryContentPhoto(InputStoryContentPhoto):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInputStoryContentPhoto

    def test_concrete_instantiation(self, concrete_input_story_content_photo):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_input_story_content_photo()
        assert isinstance(instance, InputStoryContentPhoto)


class TestInputStoryContentPhotosFactory:
    """Tests for InputStoryContentPhotosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InputStoryContentPhotosFactory.INPUTSTORYCONTENTPHOTOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InputStoryContentPhoto):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InputStoryContentPhotosFactory.register_input_story_content_photo(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.input_story_content_photo = mocker.MagicMock()
        mock_update.input_story_content_photo.photo = "test_trigger"

        result = await InputStoryContentPhotosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.input_story_content_photo = mocker.MagicMock()
        mock_update.input_story_content_photo.photo = "unknown_trigger"

        assert await InputStoryContentPhotosFactory.create(mock_update) is None
