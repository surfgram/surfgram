import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.message_origin_hidden_user import MessageOriginHiddenUser
from surfgram.types.message_origin_hidden_user.factory import (
    MessageOriginHiddenUsersFactory,
)


class TestMessageOriginHiddenUser:
    """Tests for MessageOriginHiddenUser base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            MessageOriginHiddenUser()

    @pytest.fixture
    def concrete_message_origin_hidden_user(self):
        """Concrete MessageOriginHiddenUser implementation for testing."""

        class ConcreteMessageOriginHiddenUser(MessageOriginHiddenUser):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteMessageOriginHiddenUser()

    def test_concrete_instantiation(self, concrete_message_origin_hidden_user):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_message_origin_hidden_user, MessageOriginHiddenUser)


class TestMessageOriginHiddenUsersFactory:
    """Tests for MessageOriginHiddenUsersFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        MessageOriginHiddenUsersFactory.MESSAGEORIGINHIDDENUSERS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(MessageOriginHiddenUser):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        MessageOriginHiddenUsersFactory.register_message_origin_hidden_user(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.message_origin_hidden_user = MagicMock()
        mock_update.message_origin_hidden_user.type = "test_trigger"

        result = await MessageOriginHiddenUsersFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.message_origin_hidden_user = MagicMock()
        mock_update.message_origin_hidden_user.type = "unknown_trigger"

        assert await MessageOriginHiddenUsersFactory.create(mock_update) is None
