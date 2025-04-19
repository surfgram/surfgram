import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.prepared_inline_message import PreparedInlineMessage
from surfgram.types.prepared_inline_message.factory import PreparedInlineMessagesFactory


class TestPreparedInlineMessage:
    """Tests for PreparedInlineMessage base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            PreparedInlineMessage()

    @pytest.fixture
    def concrete_prepared_inline_message(self):
        """Concrete PreparedInlineMessage implementation for testing."""

        class ConcretePreparedInlineMessage(PreparedInlineMessage):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcretePreparedInlineMessage()

    def test_concrete_instantiation(self, concrete_prepared_inline_message):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_prepared_inline_message, PreparedInlineMessage)


class TestPreparedInlineMessagesFactory:
    """Tests for PreparedInlineMessagesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        PreparedInlineMessagesFactory.PREPAREDINLINEMESSAGES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(PreparedInlineMessage):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        PreparedInlineMessagesFactory.register_prepared_inline_message(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.prepared_inline_message = MagicMock()
        mock_update.prepared_inline_message.expiration_date = "test_trigger"

        result = await PreparedInlineMessagesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.prepared_inline_message = MagicMock()
        mock_update.prepared_inline_message.expiration_date = "unknown_trigger"

        assert await PreparedInlineMessagesFactory.create(mock_update) is None
