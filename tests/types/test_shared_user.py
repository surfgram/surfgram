import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.shared_user import SharedUser
from surfgram.types.shared_user.factory import SharedUsersFactory


class TestSharedUser:
    """Tests for SharedUser base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            SharedUser()

    @pytest.fixture
    def concrete_shared_user(self):
        """Concrete SharedUser implementation for testing."""

        class ConcreteSharedUser(SharedUser):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteSharedUser()

    def test_concrete_instantiation(self, concrete_shared_user):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_shared_user, SharedUser)


class TestSharedUsersFactory:
    """Tests for SharedUsersFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        SharedUsersFactory.SHAREDUSERS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(SharedUser):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        SharedUsersFactory.register_shared_user(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.shared_user = MagicMock()
        mock_update.shared_user.photo = "test_trigger"

        result = await SharedUsersFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.shared_user = MagicMock()
        mock_update.shared_user.photo = "unknown_trigger"

        assert await SharedUsersFactory.create(mock_update) is None
