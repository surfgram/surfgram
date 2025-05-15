import pytest
from surfgram.types.chat_boost_source_premium import ChatBoostSourcePremium
from surfgram.types.chat_boost_source_premium.factory import (
    ChatBoostSourcePremiumsFactory,
)


class TestChatBoostSourcePremium:
    """Tests for ChatBoostSourcePremium base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ChatBoostSourcePremium()

    @pytest.fixture
    def concrete_chat_boost_source_premium(self):
        """Concrete ChatBoostSourcePremium implementation for testing."""

        class ConcreteChatBoostSourcePremium(ChatBoostSourcePremium):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteChatBoostSourcePremium

    def test_concrete_instantiation(self, concrete_chat_boost_source_premium):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_chat_boost_source_premium()
        assert isinstance(instance, ChatBoostSourcePremium)


class TestChatBoostSourcePremiumsFactory:
    """Tests for ChatBoostSourcePremiumsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ChatBoostSourcePremiumsFactory.CHATBOOSTSOURCEPREMIUMS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ChatBoostSourcePremium):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ChatBoostSourcePremiumsFactory.register_chat_boost_source_premium(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_boost_source_premium = mocker.MagicMock()
        mock_update.chat_boost_source_premium.source = "test_trigger"

        result = await ChatBoostSourcePremiumsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_boost_source_premium = mocker.MagicMock()
        mock_update.chat_boost_source_premium.source = "unknown_trigger"

        assert await ChatBoostSourcePremiumsFactory.create(mock_update) is None
