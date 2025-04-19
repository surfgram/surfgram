import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.message_origin_user import MessageOriginUser
from surfgram.types.message_origin_user.factory import MessageOriginUsersFactory


class TestMessageOriginUser:
    """Tests for MessageOriginUser base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            MessageOriginUser()

    @pytest.fixture
    def concrete_message_origin_user(self):
        """Concrete MessageOriginUser implementation for testing."""

        class ConcreteMessageOriginUser(MessageOriginUser):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteMessageOriginUser()

    def test_concrete_instantiation(self, concrete_message_origin_user):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_message_origin_user, MessageOriginUser)


class TestMessageOriginUsersFactory:
    """Tests for MessageOriginUsersFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        MessageOriginUsersFactory.MESSAGEORIGINUSERS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(MessageOriginUser):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        MessageOriginUsersFactory.register_message_origin_user(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.message_origin_user = MagicMock()
        mock_update.message_origin_user.type = "test_trigger"

        result = await MessageOriginUsersFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.message_origin_user = MagicMock()
        mock_update.message_origin_user.type = "unknown_trigger"

        assert await MessageOriginUsersFactory.create(mock_update) is None
