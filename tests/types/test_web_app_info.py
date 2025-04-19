import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.web_app_info import WebAppInfo
from surfgram.types.web_app_info.factory import WebAppInfosFactory


class TestWebAppInfo:
    """Tests for WebAppInfo base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            WebAppInfo()

    @pytest.fixture
    def concrete_web_app_info(self):
        """Concrete WebAppInfo implementation for testing."""

        class ConcreteWebAppInfo(WebAppInfo):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteWebAppInfo()

    def test_concrete_instantiation(self, concrete_web_app_info):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_web_app_info, WebAppInfo)


class TestWebAppInfosFactory:
    """Tests for WebAppInfosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        WebAppInfosFactory.WEBAPPINFOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(WebAppInfo):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        WebAppInfosFactory.register_web_app_info(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.web_app_info = MagicMock()
        mock_update.web_app_info.url = "test_trigger"

        result = await WebAppInfosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.web_app_info = MagicMock()
        mock_update.web_app_info.url = "unknown_trigger"

        assert await WebAppInfosFactory.create(mock_update) is None
