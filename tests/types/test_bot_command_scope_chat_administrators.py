import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.bot_command_scope_chat_administrators import (
    BotCommandScopeChatAdministrators,
)
from surfgram.types.bot_command_scope_chat_administrators.factory import (
    BotCommandScopeChatAdministratorsFactory,
)


class TestBotCommandScopeChatAdministrators:
    """Tests for BotCommandScopeChatAdministrators base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            BotCommandScopeChatAdministrators()

    @pytest.fixture
    def concrete_bot_command_scope_chat_administrators(self):
        """Concrete BotCommandScopeChatAdministrators implementation for testing."""

        class ConcreteBotCommandScopeChatAdministrators(
            BotCommandScopeChatAdministrators
        ):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteBotCommandScopeChatAdministrators()

    def test_concrete_instantiation(
        self, concrete_bot_command_scope_chat_administrators
    ):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(
            concrete_bot_command_scope_chat_administrators,
            BotCommandScopeChatAdministrators,
        )


class TestBotCommandScopeChatAdministratorsFactory:
    """Tests for BotCommandScopeChatAdministratorsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BotCommandScopeChatAdministratorsFactory.BOTCOMMANDSCOPECHATADMINISTRATORS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(BotCommandScopeChatAdministrators):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        BotCommandScopeChatAdministratorsFactory.register_bot_command_scope_chat_administrators(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.bot_command_scope_chat_administrators = MagicMock()
        mock_update.bot_command_scope_chat_administrators.type = "test_trigger"

        result = await BotCommandScopeChatAdministratorsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.bot_command_scope_chat_administrators = MagicMock()
        mock_update.bot_command_scope_chat_administrators.type = "unknown_trigger"

        assert (
            await BotCommandScopeChatAdministratorsFactory.create(mock_update) is None
        )
