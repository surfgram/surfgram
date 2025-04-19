import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.user_chat_boosts import UserChatBoosts
from surfgram.types.user_chat_boosts.factory import UserChatBoostsFactory


class TestUserChatBoosts:
    """Tests for UserChatBoosts base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            UserChatBoosts()

    @pytest.fixture
    def concrete_user_chat_boosts(self):
        """Concrete UserChatBoosts implementation for testing."""

        class ConcreteUserChatBoosts(UserChatBoosts):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteUserChatBoosts()

    def test_concrete_instantiation(self, concrete_user_chat_boosts):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_user_chat_boosts, UserChatBoosts)


class TestUserChatBoostsFactory:
    """Tests for UserChatBoostsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        UserChatBoostsFactory.USERCHATBOOSTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(UserChatBoosts):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        UserChatBoostsFactory.register_user_chat_boosts(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.user_chat_boosts = MagicMock()
        mock_update.user_chat_boosts.boosts = "test_trigger"

        result = await UserChatBoostsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.user_chat_boosts = MagicMock()
        mock_update.user_chat_boosts.boosts = "unknown_trigger"

        assert await UserChatBoostsFactory.create(mock_update) is None
