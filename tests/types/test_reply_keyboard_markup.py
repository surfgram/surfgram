import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.reply_keyboard_markup import ReplyKeyboardMarkup
from surfgram.types.reply_keyboard_markup.factory import ReplyKeyboardMarkupsFactory


class TestReplyKeyboardMarkup:
    """Tests for ReplyKeyboardMarkup base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ReplyKeyboardMarkup()

    @pytest.fixture
    def concrete_reply_keyboard_markup(self):
        """Concrete ReplyKeyboardMarkup implementation for testing."""

        class ConcreteReplyKeyboardMarkup(ReplyKeyboardMarkup):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteReplyKeyboardMarkup()

    def test_concrete_instantiation(self, concrete_reply_keyboard_markup):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_reply_keyboard_markup, ReplyKeyboardMarkup)


class TestReplyKeyboardMarkupsFactory:
    """Tests for ReplyKeyboardMarkupsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ReplyKeyboardMarkupsFactory.REPLYKEYBOARDMARKUPS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ReplyKeyboardMarkup):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        ReplyKeyboardMarkupsFactory.register_reply_keyboard_markup(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.reply_keyboard_markup = MagicMock()
        mock_update.reply_keyboard_markup.input_field_placeholder = "test_trigger"

        result = await ReplyKeyboardMarkupsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.reply_keyboard_markup = MagicMock()
        mock_update.reply_keyboard_markup.input_field_placeholder = "unknown_trigger"

        assert await ReplyKeyboardMarkupsFactory.create(mock_update) is None
