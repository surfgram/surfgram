import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.bot_command_scope_chat import BotCommandScopeChat
from surfgram.types.bot_command_scope_chat.factory import BotCommandScopeChatsFactory


class TestBotCommandScopeChat:
    """Tests for BotCommandScopeChat base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            BotCommandScopeChat()

    @pytest.fixture
    def concrete_bot_command_scope_chat(self):
        """Concrete BotCommandScopeChat implementation for testing."""

        class ConcreteBotCommandScopeChat(BotCommandScopeChat):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteBotCommandScopeChat()

    def test_concrete_instantiation(self, concrete_bot_command_scope_chat):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_bot_command_scope_chat, BotCommandScopeChat)


class TestBotCommandScopeChatsFactory:
    """Tests for BotCommandScopeChatsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BotCommandScopeChatsFactory.BOTCOMMANDSCOPECHATS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(BotCommandScopeChat):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        BotCommandScopeChatsFactory.register_bot_command_scope_chat(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.bot_command_scope_chat = MagicMock()
        mock_update.bot_command_scope_chat.type = "test_trigger"

        result = await BotCommandScopeChatsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.bot_command_scope_chat = MagicMock()
        mock_update.bot_command_scope_chat.type = "unknown_trigger"

        assert await BotCommandScopeChatsFactory.create(mock_update) is None
