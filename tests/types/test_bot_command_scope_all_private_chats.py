import pytest
from surfgram.types.bot_command_scope_all_private_chats import (
    BotCommandScopeAllPrivateChats,
)
from surfgram.types.bot_command_scope_all_private_chats.factory import (
    BotCommandScopeAllPrivateChatsFactory,
)


class TestBotCommandScopeAllPrivateChats:
    """Tests for BotCommandScopeAllPrivateChats base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            BotCommandScopeAllPrivateChats()

    @pytest.fixture
    def concrete_bot_command_scope_all_private_chats(self):
        """Concrete BotCommandScopeAllPrivateChats implementation for testing."""

        class ConcreteBotCommandScopeAllPrivateChats(BotCommandScopeAllPrivateChats):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteBotCommandScopeAllPrivateChats

    def test_concrete_instantiation(self, concrete_bot_command_scope_all_private_chats):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_bot_command_scope_all_private_chats()
        assert isinstance(instance, BotCommandScopeAllPrivateChats)


class TestBotCommandScopeAllPrivateChatsFactory:
    """Tests for BotCommandScopeAllPrivateChatsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BotCommandScopeAllPrivateChatsFactory.BOTCOMMANDSCOPEALLPRIVATECHATS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(BotCommandScopeAllPrivateChats):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        BotCommandScopeAllPrivateChatsFactory.register_bot_command_scope_all_private_chats(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.bot_command_scope_all_private_chats = mocker.MagicMock()
        mock_update.bot_command_scope_all_private_chats.type = "test_trigger"

        result = await BotCommandScopeAllPrivateChatsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.bot_command_scope_all_private_chats = mocker.MagicMock()
        mock_update.bot_command_scope_all_private_chats.type = "unknown_trigger"

        assert await BotCommandScopeAllPrivateChatsFactory.create(mock_update) is None
