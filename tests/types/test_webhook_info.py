import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.webhook_info import WebhookInfo
from surfgram.types.webhook_info.factory import WebhookInfosFactory


class TestWebhookInfo:
    """Tests for WebhookInfo base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            WebhookInfo()

    @pytest.fixture
    def concrete_webhook_info(self):
        """Concrete WebhookInfo implementation for testing."""

        class ConcreteWebhookInfo(WebhookInfo):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteWebhookInfo()

    def test_concrete_instantiation(self, concrete_webhook_info):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_webhook_info, WebhookInfo)


class TestWebhookInfosFactory:
    """Tests for WebhookInfosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        WebhookInfosFactory.WEBHOOKINFOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(WebhookInfo):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        WebhookInfosFactory.register_webhook_info(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.webhook_info = MagicMock()
        mock_update.webhook_info.ip_address = "test_trigger"

        result = await WebhookInfosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.webhook_info = MagicMock()
        mock_update.webhook_info.ip_address = "unknown_trigger"

        assert await WebhookInfosFactory.create(mock_update) is None
