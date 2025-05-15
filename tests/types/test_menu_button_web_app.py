import pytest
from surfgram.types.menu_button_web_app import MenuButtonWebApp
from surfgram.types.menu_button_web_app.factory import MenuButtonWebAppsFactory


class TestMenuButtonWebApp:
    """Tests for MenuButtonWebApp base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            MenuButtonWebApp()

    @pytest.fixture
    def concrete_menu_button_web_app(self):
        """Concrete MenuButtonWebApp implementation for testing."""

        class ConcreteMenuButtonWebApp(MenuButtonWebApp):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteMenuButtonWebApp

    def test_concrete_instantiation(self, concrete_menu_button_web_app):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_menu_button_web_app()
        assert isinstance(instance, MenuButtonWebApp)


class TestMenuButtonWebAppsFactory:
    """Tests for MenuButtonWebAppsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        MenuButtonWebAppsFactory.MENUBUTTONWEBAPPS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(MenuButtonWebApp):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        MenuButtonWebAppsFactory.register_menu_button_web_app(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.menu_button_web_app = mocker.MagicMock()
        mock_update.menu_button_web_app.text = "test_trigger"

        result = await MenuButtonWebAppsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.menu_button_web_app = mocker.MagicMock()
        mock_update.menu_button_web_app.text = "unknown_trigger"

        assert await MenuButtonWebAppsFactory.create(mock_update) is None
