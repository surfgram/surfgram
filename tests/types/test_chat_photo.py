import pytest
from surfgram.types.chat_photo import ChatPhoto
from surfgram.types.chat_photo.factory import ChatPhotosFactory


class TestChatPhoto:
    """Tests for ChatPhoto base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ChatPhoto()

    @pytest.fixture
    def concrete_chat_photo(self):
        """Concrete ChatPhoto implementation for testing."""

        class ConcreteChatPhoto(ChatPhoto):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteChatPhoto

    def test_concrete_instantiation(self, concrete_chat_photo):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_chat_photo()
        assert isinstance(instance, ChatPhoto)


class TestChatPhotosFactory:
    """Tests for ChatPhotosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ChatPhotosFactory.CHATPHOTOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ChatPhoto):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ChatPhotosFactory.register_chat_photo(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_photo = mocker.MagicMock()
        mock_update.chat_photo.small_file_id = "test_trigger"

        result = await ChatPhotosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_photo = mocker.MagicMock()
        mock_update.chat_photo.small_file_id = "unknown_trigger"

        assert await ChatPhotosFactory.create(mock_update) is None
