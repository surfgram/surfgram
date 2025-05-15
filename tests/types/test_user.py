import pytest
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

            async def __callback__(self):
                return None

        return ConcreteUser

    def test_concrete_instantiation(self, concrete_user):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_user()
        assert isinstance(instance, User)


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

            async def __callback__(self):
                return None

        UsersFactory.register_user(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.user = mocker.MagicMock()
        mock_update.user.first_name = "test_trigger"

        result = await UsersFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.user = mocker.MagicMock()
        mock_update.user.first_name = "unknown_trigger"

        assert await UsersFactory.create(mock_update) is None
