import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.menu_button_commands import MenuButtonCommands
from surfgram.types.menu_button_commands.factory import MenuButtonCommandsFactory


class TestMenuButtonCommands:
    """Tests for MenuButtonCommands base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            MenuButtonCommands()

    @pytest.fixture
    def concrete_menu_button_commands(self):
        """Concrete MenuButtonCommands implementation for testing."""

        class ConcreteMenuButtonCommands(MenuButtonCommands):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteMenuButtonCommands()

    def test_concrete_instantiation(self, concrete_menu_button_commands):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_menu_button_commands, MenuButtonCommands)


class TestMenuButtonCommandsFactory:
    """Tests for MenuButtonCommandsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        MenuButtonCommandsFactory.MENUBUTTONCOMMANDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(MenuButtonCommands):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        MenuButtonCommandsFactory.register_menu_button_commands(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.menu_button_commands = MagicMock()
        mock_update.menu_button_commands.type = "test_trigger"

        result = await MenuButtonCommandsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.menu_button_commands = MagicMock()
        mock_update.menu_button_commands.type = "unknown_trigger"

        assert await MenuButtonCommandsFactory.create(mock_update) is None
