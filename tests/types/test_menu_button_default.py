import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.menu_button_default import MenuButtonDefault
from surfgram.types.menu_button_default.factory import MenuButtonDefaultsFactory


class TestMenuButtonDefault:
    """Tests for MenuButtonDefault base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            MenuButtonDefault()

    @pytest.fixture
    def concrete_menu_button_default(self):
        """Concrete MenuButtonDefault implementation for testing."""

        class ConcreteMenuButtonDefault(MenuButtonDefault):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteMenuButtonDefault()

    def test_concrete_instantiation(self, concrete_menu_button_default):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_menu_button_default, MenuButtonDefault)


class TestMenuButtonDefaultsFactory:
    """Tests for MenuButtonDefaultsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        MenuButtonDefaultsFactory.MENUBUTTONDEFAULTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(MenuButtonDefault):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        MenuButtonDefaultsFactory.register_menu_button_default(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.menu_button_default = MagicMock()
        mock_update.menu_button_default.type = "test_trigger"

        result = await MenuButtonDefaultsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.menu_button_default = MagicMock()
        mock_update.menu_button_default.type = "unknown_trigger"

        assert await MenuButtonDefaultsFactory.create(mock_update) is None
