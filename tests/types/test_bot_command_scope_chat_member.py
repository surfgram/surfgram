import pytest
from surfgram.types.bot_command_scope_chat_member import BotCommandScopeChatMember
from surfgram.types.bot_command_scope_chat_member.factory import (
    BotCommandScopeChatMembersFactory,
)


class TestBotCommandScopeChatMember:
    """Tests for BotCommandScopeChatMember base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            BotCommandScopeChatMember()

    @pytest.fixture
    def concrete_bot_command_scope_chat_member(self):
        """Concrete BotCommandScopeChatMember implementation for testing."""

        class ConcreteBotCommandScopeChatMember(BotCommandScopeChatMember):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteBotCommandScopeChatMember

    def test_concrete_instantiation(self, concrete_bot_command_scope_chat_member):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_bot_command_scope_chat_member()
        assert isinstance(instance, BotCommandScopeChatMember)


class TestBotCommandScopeChatMembersFactory:
    """Tests for BotCommandScopeChatMembersFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BotCommandScopeChatMembersFactory.BOTCOMMANDSCOPECHATMEMBERS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(BotCommandScopeChatMember):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        BotCommandScopeChatMembersFactory.register_bot_command_scope_chat_member(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.bot_command_scope_chat_member = mocker.MagicMock()
        mock_update.bot_command_scope_chat_member.type = "test_trigger"

        result = await BotCommandScopeChatMembersFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.bot_command_scope_chat_member = mocker.MagicMock()
        mock_update.bot_command_scope_chat_member.type = "unknown_trigger"

        assert await BotCommandScopeChatMembersFactory.create(mock_update) is None
