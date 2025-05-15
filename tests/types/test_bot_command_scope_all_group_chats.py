import pytest
from surfgram.types.bot_command_scope_all_group_chats import (
    BotCommandScopeAllGroupChats,
)
from surfgram.types.bot_command_scope_all_group_chats.factory import (
    BotCommandScopeAllGroupChatsFactory,
)


class TestBotCommandScopeAllGroupChats:
    """Tests for BotCommandScopeAllGroupChats base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            BotCommandScopeAllGroupChats()

    @pytest.fixture
    def concrete_bot_command_scope_all_group_chats(self):
        """Concrete BotCommandScopeAllGroupChats implementation for testing."""

        class ConcreteBotCommandScopeAllGroupChats(BotCommandScopeAllGroupChats):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteBotCommandScopeAllGroupChats

    def test_concrete_instantiation(self, concrete_bot_command_scope_all_group_chats):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_bot_command_scope_all_group_chats()
        assert isinstance(instance, BotCommandScopeAllGroupChats)


class TestBotCommandScopeAllGroupChatsFactory:
    """Tests for BotCommandScopeAllGroupChatsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BotCommandScopeAllGroupChatsFactory.BOTCOMMANDSCOPEALLGROUPCHATS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(BotCommandScopeAllGroupChats):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        BotCommandScopeAllGroupChatsFactory.register_bot_command_scope_all_group_chats(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.bot_command_scope_all_group_chats = mocker.MagicMock()
        mock_update.bot_command_scope_all_group_chats.type = "test_trigger"

        result = await BotCommandScopeAllGroupChatsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.bot_command_scope_all_group_chats = mocker.MagicMock()
        mock_update.bot_command_scope_all_group_chats.type = "unknown_trigger"

        assert await BotCommandScopeAllGroupChatsFactory.create(mock_update) is None
