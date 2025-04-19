import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.bot_command_scope_all_chat_administrators import (
    BotCommandScopeAllChatAdministrators,
)
from surfgram.types.bot_command_scope_all_chat_administrators.factory import (
    BotCommandScopeAllChatAdministratorsFactory,
)


class TestBotCommandScopeAllChatAdministrators:
    """Tests for BotCommandScopeAllChatAdministrators base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            BotCommandScopeAllChatAdministrators()

    @pytest.fixture
    def concrete_bot_command_scope_all_chat_administrators(self):
        """Concrete BotCommandScopeAllChatAdministrators implementation for testing."""

        class ConcreteBotCommandScopeAllChatAdministrators(
            BotCommandScopeAllChatAdministrators
        ):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteBotCommandScopeAllChatAdministrators()

    def test_concrete_instantiation(
        self, concrete_bot_command_scope_all_chat_administrators
    ):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(
            concrete_bot_command_scope_all_chat_administrators,
            BotCommandScopeAllChatAdministrators,
        )


class TestBotCommandScopeAllChatAdministratorsFactory:
    """Tests for BotCommandScopeAllChatAdministratorsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BotCommandScopeAllChatAdministratorsFactory.BOTCOMMANDSCOPEALLCHATADMINISTRATORS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(BotCommandScopeAllChatAdministrators):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        BotCommandScopeAllChatAdministratorsFactory.register_bot_command_scope_all_chat_administrators(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.bot_command_scope_all_chat_administrators = MagicMock()
        mock_update.bot_command_scope_all_chat_administrators.type = "test_trigger"

        result = await BotCommandScopeAllChatAdministratorsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.bot_command_scope_all_chat_administrators = MagicMock()
        mock_update.bot_command_scope_all_chat_administrators.type = "unknown_trigger"

        assert (
            await BotCommandScopeAllChatAdministratorsFactory.create(mock_update)
            is None
        )
