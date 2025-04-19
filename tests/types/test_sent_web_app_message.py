import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.sent_web_app_message import SentWebAppMessage
from surfgram.types.sent_web_app_message.factory import SentWebAppMessagesFactory


class TestSentWebAppMessage:
    """Tests for SentWebAppMessage base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            SentWebAppMessage()

    @pytest.fixture
    def concrete_sent_web_app_message(self):
        """Concrete SentWebAppMessage implementation for testing."""

        class ConcreteSentWebAppMessage(SentWebAppMessage):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteSentWebAppMessage()

    def test_concrete_instantiation(self, concrete_sent_web_app_message):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_sent_web_app_message, SentWebAppMessage)


class TestSentWebAppMessagesFactory:
    """Tests for SentWebAppMessagesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        SentWebAppMessagesFactory.SENTWEBAPPMESSAGES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(SentWebAppMessage):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        SentWebAppMessagesFactory.register_sent_web_app_message(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.sent_web_app_message = MagicMock()
        mock_update.sent_web_app_message.inline_message_id = "test_trigger"

        result = await SentWebAppMessagesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.sent_web_app_message = MagicMock()
        mock_update.sent_web_app_message.inline_message_id = "unknown_trigger"

        assert await SentWebAppMessagesFactory.create(mock_update) is None
