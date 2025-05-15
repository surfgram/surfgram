import pytest
from surfgram.types.chat_boost_updated import ChatBoostUpdated
from surfgram.types.chat_boost_updated.factory import ChatBoostUpdatedsFactory


class TestChatBoostUpdated:
    """Tests for ChatBoostUpdated base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ChatBoostUpdated()

    @pytest.fixture
    def concrete_chat_boost_updated(self):
        """Concrete ChatBoostUpdated implementation for testing."""

        class ConcreteChatBoostUpdated(ChatBoostUpdated):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteChatBoostUpdated

    def test_concrete_instantiation(self, concrete_chat_boost_updated):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_chat_boost_updated()
        assert isinstance(instance, ChatBoostUpdated)


class TestChatBoostUpdatedsFactory:
    """Tests for ChatBoostUpdatedsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ChatBoostUpdatedsFactory.CHATBOOSTUPDATEDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ChatBoostUpdated):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ChatBoostUpdatedsFactory.register_chat_boost_updated(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_boost_updated = mocker.MagicMock()
        mock_update.chat_boost_updated.boost = "test_trigger"

        result = await ChatBoostUpdatedsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_boost_updated = mocker.MagicMock()
        mock_update.chat_boost_updated.boost = "unknown_trigger"

        assert await ChatBoostUpdatedsFactory.create(mock_update) is None
