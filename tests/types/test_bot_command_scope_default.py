import pytest
from surfgram.types.bot_command_scope_default import BotCommandScopeDefault
from surfgram.types.bot_command_scope_default.factory import (
    BotCommandScopeDefaultsFactory,
)


class TestBotCommandScopeDefault:
    """Tests for BotCommandScopeDefault base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            BotCommandScopeDefault()

    @pytest.fixture
    def concrete_bot_command_scope_default(self):
        """Concrete BotCommandScopeDefault implementation for testing."""

        class ConcreteBotCommandScopeDefault(BotCommandScopeDefault):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteBotCommandScopeDefault

    def test_concrete_instantiation(self, concrete_bot_command_scope_default):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_bot_command_scope_default()
        assert isinstance(instance, BotCommandScopeDefault)


class TestBotCommandScopeDefaultsFactory:
    """Tests for BotCommandScopeDefaultsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BotCommandScopeDefaultsFactory.BOTCOMMANDSCOPEDEFAULTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(BotCommandScopeDefault):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        BotCommandScopeDefaultsFactory.register_bot_command_scope_default(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.bot_command_scope_default = mocker.MagicMock()
        mock_update.bot_command_scope_default.type = "test_trigger"

        result = await BotCommandScopeDefaultsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.bot_command_scope_default = mocker.MagicMock()
        mock_update.bot_command_scope_default.type = "unknown_trigger"

        assert await BotCommandScopeDefaultsFactory.create(mock_update) is None
