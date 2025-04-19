import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.keyboard_button_poll_type import KeyboardButtonPollType
from surfgram.types.keyboard_button_poll_type.factory import (
    KeyboardButtonPollTypesFactory,
)


class TestKeyboardButtonPollType:
    """Tests for KeyboardButtonPollType base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            KeyboardButtonPollType()

    @pytest.fixture
    def concrete_keyboard_button_poll_type(self):
        """Concrete KeyboardButtonPollType implementation for testing."""

        class ConcreteKeyboardButtonPollType(KeyboardButtonPollType):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteKeyboardButtonPollType()

    def test_concrete_instantiation(self, concrete_keyboard_button_poll_type):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_keyboard_button_poll_type, KeyboardButtonPollType)


class TestKeyboardButtonPollTypesFactory:
    """Tests for KeyboardButtonPollTypesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        KeyboardButtonPollTypesFactory.KEYBOARDBUTTONPOLLTYPES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(KeyboardButtonPollType):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        KeyboardButtonPollTypesFactory.register_keyboard_button_poll_type(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.keyboard_button_poll_type = MagicMock()
        mock_update.keyboard_button_poll_type.type = "test_trigger"

        result = await KeyboardButtonPollTypesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.keyboard_button_poll_type = MagicMock()
        mock_update.keyboard_button_poll_type.type = "unknown_trigger"

        assert await KeyboardButtonPollTypesFactory.create(mock_update) is None
