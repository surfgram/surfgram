import pytest
from surfgram.types.keyboard_button import KeyboardButton
from surfgram.types.keyboard_button.factory import KeyboardButtonsFactory


class TestKeyboardButton:
    """Tests for KeyboardButton base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            KeyboardButton()

    @pytest.fixture
    def concrete_keyboard_button(self):
        """Concrete KeyboardButton implementation for testing."""

        class ConcreteKeyboardButton(KeyboardButton):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteKeyboardButton

    def test_concrete_instantiation(self, concrete_keyboard_button):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_keyboard_button()
        assert isinstance(instance, KeyboardButton)


class TestKeyboardButtonsFactory:
    """Tests for KeyboardButtonsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        KeyboardButtonsFactory.KEYBOARDBUTTONS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(KeyboardButton):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        KeyboardButtonsFactory.register_keyboard_button(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.keyboard_button = mocker.MagicMock()
        mock_update.keyboard_button.text = "test_trigger"

        result = await KeyboardButtonsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.keyboard_button = mocker.MagicMock()
        mock_update.keyboard_button.text = "unknown_trigger"

        assert await KeyboardButtonsFactory.create(mock_update) is None
