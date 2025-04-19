import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.inline_keyboard_button import InlineKeyboardButton
from surfgram.types.inline_keyboard_button.factory import InlineKeyboardButtonsFactory


class TestInlineKeyboardButton:
    """Tests for InlineKeyboardButton base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InlineKeyboardButton()

    @pytest.fixture
    def concrete_inline_keyboard_button(self):
        """Concrete InlineKeyboardButton implementation for testing."""

        class ConcreteInlineKeyboardButton(InlineKeyboardButton):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteInlineKeyboardButton()

    def test_concrete_instantiation(self, concrete_inline_keyboard_button):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_inline_keyboard_button, InlineKeyboardButton)


class TestInlineKeyboardButtonsFactory:
    """Tests for InlineKeyboardButtonsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InlineKeyboardButtonsFactory.INLINEKEYBOARDBUTTONS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InlineKeyboardButton):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        InlineKeyboardButtonsFactory.register_inline_keyboard_button(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.inline_keyboard_button = MagicMock()
        mock_update.inline_keyboard_button.text = "test_trigger"

        result = await InlineKeyboardButtonsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.inline_keyboard_button = MagicMock()
        mock_update.inline_keyboard_button.text = "unknown_trigger"

        assert await InlineKeyboardButtonsFactory.create(mock_update) is None
