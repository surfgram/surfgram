import pytest
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

            async def __callback__(self):
                return None

        return ConcreteKeyboardButtonRequestChat

    def test_concrete_instantiation(self, concrete_keyboard_button_request_chat):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_keyboard_button_request_chat()
        assert isinstance(instance, KeyboardButtonRequestChat)


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

            async def __callback__(self):
                return None

        KeyboardButtonRequestChatsFactory.register_keyboard_button_request_chat(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.keyboard_button_request_chat = mocker.MagicMock()
        mock_update.keyboard_button_request_chat.request_title = "test_trigger"

        result = await KeyboardButtonRequestChatsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.keyboard_button_request_chat = mocker.MagicMock()
        mock_update.keyboard_button_request_chat.request_title = "unknown_trigger"

        assert await KeyboardButtonRequestChatsFactory.create(mock_update) is None
