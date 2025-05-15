import pytest
from surfgram.types.chat_boost_source_giveaway import ChatBoostSourceGiveaway
from surfgram.types.chat_boost_source_giveaway.factory import (
    ChatBoostSourceGiveawaysFactory,
)


class TestChatBoostSourceGiveaway:
    """Tests for ChatBoostSourceGiveaway base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ChatBoostSourceGiveaway()

    @pytest.fixture
    def concrete_chat_boost_source_giveaway(self):
        """Concrete ChatBoostSourceGiveaway implementation for testing."""

        class ConcreteChatBoostSourceGiveaway(ChatBoostSourceGiveaway):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteChatBoostSourceGiveaway

    def test_concrete_instantiation(self, concrete_chat_boost_source_giveaway):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_chat_boost_source_giveaway()
        assert isinstance(instance, ChatBoostSourceGiveaway)


class TestChatBoostSourceGiveawaysFactory:
    """Tests for ChatBoostSourceGiveawaysFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ChatBoostSourceGiveawaysFactory.CHATBOOSTSOURCEGIVEAWAYS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ChatBoostSourceGiveaway):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ChatBoostSourceGiveawaysFactory.register_chat_boost_source_giveaway(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_boost_source_giveaway = mocker.MagicMock()
        mock_update.chat_boost_source_giveaway.source = "test_trigger"

        result = await ChatBoostSourceGiveawaysFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_boost_source_giveaway = mocker.MagicMock()
        mock_update.chat_boost_source_giveaway.source = "unknown_trigger"

        assert await ChatBoostSourceGiveawaysFactory.create(mock_update) is None
