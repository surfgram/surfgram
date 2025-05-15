import pytest
from surfgram.types.chat_boost_added import ChatBoostAdded
from surfgram.types.chat_boost_added.factory import ChatBoostAddedsFactory


class TestChatBoostAdded:
    """Tests for ChatBoostAdded base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ChatBoostAdded()

    @pytest.fixture
    def concrete_chat_boost_added(self):
        """Concrete ChatBoostAdded implementation for testing."""

        class ConcreteChatBoostAdded(ChatBoostAdded):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteChatBoostAdded

    def test_concrete_instantiation(self, concrete_chat_boost_added):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_chat_boost_added()
        assert isinstance(instance, ChatBoostAdded)


class TestChatBoostAddedsFactory:
    """Tests for ChatBoostAddedsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ChatBoostAddedsFactory.CHATBOOSTADDEDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ChatBoostAdded):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ChatBoostAddedsFactory.register_chat_boost_added(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_boost_added = mocker.MagicMock()
        mock_update.chat_boost_added.boost_count = "test_trigger"

        result = await ChatBoostAddedsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_boost_added = mocker.MagicMock()
        mock_update.chat_boost_added.boost_count = "unknown_trigger"

        assert await ChatBoostAddedsFactory.create(mock_update) is None
