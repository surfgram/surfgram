import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.keyboard_button_request_chat import KeyboardButtonRequestChat
from surfgram.types.keyboard_button_request_chat.factory import (
    KeyboardButtonRequestChatsFactory,
)


class TestKeyboardButtonRequestChat:
    """Tests for KeyboardButtonRequestChat base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            KeyboardButtonRequestChat()

    @pytest.fixture
    def concrete_keyboard_button_request_chat(self):
        """Concrete KeyboardButtonRequestChat implementation for testing."""

        class ConcreteKeyboardButtonRequestChat(KeyboardButtonRequestChat):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteKeyboardButtonRequestChat()

    def test_concrete_instantiation(self, concrete_keyboard_button_request_chat):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(
            concrete_keyboard_button_request_chat, KeyboardButtonRequestChat
        )


class TestKeyboardButtonRequestChatsFactory:
    """Tests for KeyboardButtonRequestChatsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        KeyboardButtonRequestChatsFactory.KEYBOARDBUTTONREQUESTCHATS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(KeyboardButtonRequestChat):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        KeyboardButtonRequestChatsFactory.register_keyboard_button_request_chat(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.keyboard_button_request_chat = MagicMock()
        mock_update.keyboard_button_request_chat.request_title = "test_trigger"

        result = await KeyboardButtonRequestChatsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.keyboard_button_request_chat = MagicMock()
        mock_update.keyboard_button_request_chat.request_title = "unknown_trigger"

        assert await KeyboardButtonRequestChatsFactory.create(mock_update) is None
