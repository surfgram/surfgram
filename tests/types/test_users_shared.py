import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.users_shared import UsersShared
from surfgram.types.users_shared.factory import UsersSharedsFactory


class TestUsersShared:
    """Tests for UsersShared base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            UsersShared()

    @pytest.fixture
    def concrete_users_shared(self):
        """Concrete UsersShared implementation for testing."""

        class ConcreteUsersShared(UsersShared):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteUsersShared()

    def test_concrete_instantiation(self, concrete_users_shared):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_users_shared, UsersShared)


class TestUsersSharedsFactory:
    """Tests for UsersSharedsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        UsersSharedsFactory.USERSSHAREDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(UsersShared):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        UsersSharedsFactory.register_users_shared(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.users_shared = MagicMock()
        mock_update.users_shared.request_id = "test_trigger"

        result = await UsersSharedsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.users_shared = MagicMock()
        mock_update.users_shared.request_id = "unknown_trigger"

        assert await UsersSharedsFactory.create(mock_update) is None
