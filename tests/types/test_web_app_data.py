import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.web_app_data import WebAppData
from surfgram.types.web_app_data.factory import WebAppDataFactory


class TestWebAppData:
    """Tests for WebAppData base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            WebAppData()

    @pytest.fixture
    def concrete_web_app_data(self):
        """Concrete WebAppData implementation for testing."""

        class ConcreteWebAppData(WebAppData):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteWebAppData()

    def test_concrete_instantiation(self, concrete_web_app_data):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_web_app_data, WebAppData)


class TestWebAppDataFactory:
    """Tests for WebAppDataFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        WebAppDataFactory.WEBAPPDATA_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(WebAppData):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        WebAppDataFactory.register_web_app_data(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.web_app_data = MagicMock()
        mock_update.web_app_data.data = "test_trigger"

        result = await WebAppDataFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.web_app_data = MagicMock()
        mock_update.web_app_data.data = "unknown_trigger"

        assert await WebAppDataFactory.create(mock_update) is None
