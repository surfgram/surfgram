import pytest
from surfgram.types.chat_full_info import ChatFullInfo
from surfgram.types.chat_full_info.factory import ChatFullInfosFactory


class TestChatFullInfo:
    """Tests for ChatFullInfo base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ChatFullInfo()

    @pytest.fixture
    def concrete_chat_full_info(self):
        """Concrete ChatFullInfo implementation for testing."""

        class ConcreteChatFullInfo(ChatFullInfo):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteChatFullInfo

    def test_concrete_instantiation(self, concrete_chat_full_info):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_chat_full_info()
        assert isinstance(instance, ChatFullInfo)


class TestChatFullInfosFactory:
    """Tests for ChatFullInfosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ChatFullInfosFactory.CHATFULLINFOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ChatFullInfo):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ChatFullInfosFactory.register_chat_full_info(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_full_info = mocker.MagicMock()
        mock_update.chat_full_info.title = "test_trigger"

        result = await ChatFullInfosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_full_info = mocker.MagicMock()
        mock_update.chat_full_info.title = "unknown_trigger"

        assert await ChatFullInfosFactory.create(mock_update) is None
