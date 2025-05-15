import pytest
from surfgram.types.keyboard_button_request_users import KeyboardButtonRequestUsers
from surfgram.types.keyboard_button_request_users.factory import (
    KeyboardButtonRequestUsersFactory,
)


class TestKeyboardButtonRequestUsers:
    """Tests for KeyboardButtonRequestUsers base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            KeyboardButtonRequestUsers()

    @pytest.fixture
    def concrete_keyboard_button_request_users(self):
        """Concrete KeyboardButtonRequestUsers implementation for testing."""

        class ConcreteKeyboardButtonRequestUsers(KeyboardButtonRequestUsers):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteKeyboardButtonRequestUsers

    def test_concrete_instantiation(self, concrete_keyboard_button_request_users):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_keyboard_button_request_users()
        assert isinstance(instance, KeyboardButtonRequestUsers)


class TestKeyboardButtonRequestUsersFactory:
    """Tests for KeyboardButtonRequestUsersFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        KeyboardButtonRequestUsersFactory.KEYBOARDBUTTONREQUESTUSERS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(KeyboardButtonRequestUsers):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        KeyboardButtonRequestUsersFactory.register_keyboard_button_request_users(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.keyboard_button_request_users = mocker.MagicMock()
        mock_update.keyboard_button_request_users.request_photo = "test_trigger"

        result = await KeyboardButtonRequestUsersFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.keyboard_button_request_users = mocker.MagicMock()
        mock_update.keyboard_button_request_users.request_photo = "unknown_trigger"

        assert await KeyboardButtonRequestUsersFactory.create(mock_update) is None
