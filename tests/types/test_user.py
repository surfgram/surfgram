import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.user import User
from surfgram.types.user.factory import UsersFactory


class TestUser:
    """Tests for User base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            User()

    @pytest.fixture
    def concrete_user(self):
        """Concrete User implementation for testing."""

        class ConcreteUser(User):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteUser()

    def test_concrete_instantiation(self, concrete_user):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_user, User)


class TestUsersFactory:
    """Tests for UsersFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        UsersFactory.USERS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(User):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        UsersFactory.register_user(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.user = MagicMock()
        mock_update.user.first_name = "test_trigger"

        result = await UsersFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.user = MagicMock()
        mock_update.user.first_name = "unknown_trigger"

        assert await UsersFactory.create(mock_update) is None
