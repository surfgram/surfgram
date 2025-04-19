import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.business_messages_deleted import BusinessMessagesDeleted
from surfgram.types.business_messages_deleted.factory import (
    BusinessMessagesDeletedsFactory,
)


class TestBusinessMessagesDeleted:
    """Tests for BusinessMessagesDeleted base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            BusinessMessagesDeleted()

    @pytest.fixture
    def concrete_business_messages_deleted(self):
        """Concrete BusinessMessagesDeleted implementation for testing."""

        class ConcreteBusinessMessagesDeleted(BusinessMessagesDeleted):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteBusinessMessagesDeleted()

    def test_concrete_instantiation(self, concrete_business_messages_deleted):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_business_messages_deleted, BusinessMessagesDeleted)


class TestBusinessMessagesDeletedsFactory:
    """Tests for BusinessMessagesDeletedsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BusinessMessagesDeletedsFactory.BUSINESSMESSAGESDELETEDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(BusinessMessagesDeleted):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        BusinessMessagesDeletedsFactory.register_business_messages_deleted(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.business_messages_deleted = MagicMock()
        mock_update.business_messages_deleted.business_connection_id = "test_trigger"

        result = await BusinessMessagesDeletedsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.business_messages_deleted = MagicMock()
        mock_update.business_messages_deleted.business_connection_id = "unknown_trigger"

        assert await BusinessMessagesDeletedsFactory.create(mock_update) is None
