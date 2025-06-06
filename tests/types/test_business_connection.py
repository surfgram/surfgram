import pytest
from surfgram.types.business_connection import BusinessConnection
from surfgram.types.business_connection.factory import BusinessConnectionsFactory


class TestBusinessConnection:
    """Tests for BusinessConnection base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            BusinessConnection()

    @pytest.fixture
    def concrete_business_connection(self):
        """Concrete BusinessConnection implementation for testing."""

        class ConcreteBusinessConnection(BusinessConnection):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteBusinessConnection

    def test_concrete_instantiation(self, concrete_business_connection):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_business_connection()
        assert isinstance(instance, BusinessConnection)


class TestBusinessConnectionsFactory:
    """Tests for BusinessConnectionsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BusinessConnectionsFactory.BUSINESSCONNECTIONS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(BusinessConnection):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        BusinessConnectionsFactory.register_business_connection(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.business_connection = mocker.MagicMock()
        mock_update.business_connection.user_chat_id = "test_trigger"

        result = await BusinessConnectionsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.business_connection = mocker.MagicMock()
        mock_update.business_connection.user_chat_id = "unknown_trigger"

        assert await BusinessConnectionsFactory.create(mock_update) is None
