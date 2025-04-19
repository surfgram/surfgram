import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.bot_command import BotCommand
from surfgram.types.bot_command.factory import BotCommandsFactory


class TestBotCommand:
    """Tests for BotCommand base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            BotCommand()

    @pytest.fixture
    def concrete_bot_command(self):
        """Concrete BotCommand implementation for testing."""

        class ConcreteBotCommand(BotCommand):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteBotCommand()

    def test_concrete_instantiation(self, concrete_bot_command):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_bot_command, BotCommand)


class TestBotCommandsFactory:
    """Tests for BotCommandsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BotCommandsFactory.BOTCOMMANDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(BotCommand):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        BotCommandsFactory.register_bot_command(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.bot_command = MagicMock()
        mock_update.bot_command.command = "test_trigger"

        result = await BotCommandsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.bot_command = MagicMock()
        mock_update.bot_command.command = "unknown_trigger"

        assert await BotCommandsFactory.create(mock_update) is None
