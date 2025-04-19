import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.background_type_chat_theme import BackgroundTypeChatTheme
from surfgram.types.background_type_chat_theme.factory import (
    BackgroundTypeChatThemesFactory,
)


class TestBackgroundTypeChatTheme:
    """Tests for BackgroundTypeChatTheme base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            BackgroundTypeChatTheme()

    @pytest.fixture
    def concrete_background_type_chat_theme(self):
        """Concrete BackgroundTypeChatTheme implementation for testing."""

        class ConcreteBackgroundTypeChatTheme(BackgroundTypeChatTheme):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteBackgroundTypeChatTheme()

    def test_concrete_instantiation(self, concrete_background_type_chat_theme):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_background_type_chat_theme, BackgroundTypeChatTheme)


class TestBackgroundTypeChatThemesFactory:
    """Tests for BackgroundTypeChatThemesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BackgroundTypeChatThemesFactory.BACKGROUNDTYPECHATTHEMES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(BackgroundTypeChatTheme):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        BackgroundTypeChatThemesFactory.register_background_type_chat_theme(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.background_type_chat_theme = MagicMock()
        mock_update.background_type_chat_theme.type = "test_trigger"

        result = await BackgroundTypeChatThemesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.background_type_chat_theme = MagicMock()
        mock_update.background_type_chat_theme.type = "unknown_trigger"

        assert await BackgroundTypeChatThemesFactory.create(mock_update) is None
