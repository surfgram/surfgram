import pytest
from surfgram.types.inline_keyboard_markup import InlineKeyboardMarkup
from surfgram.types.inline_keyboard_markup.factory import InlineKeyboardMarkupsFactory


class TestInlineKeyboardMarkup:
    """Tests for InlineKeyboardMarkup base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InlineKeyboardMarkup()

    @pytest.fixture
    def concrete_inline_keyboard_markup(self):
        """Concrete InlineKeyboardMarkup implementation for testing."""

        class ConcreteInlineKeyboardMarkup(InlineKeyboardMarkup):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInlineKeyboardMarkup

    def test_concrete_instantiation(self, concrete_inline_keyboard_markup):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_inline_keyboard_markup()
        assert isinstance(instance, InlineKeyboardMarkup)


class TestInlineKeyboardMarkupsFactory:
    """Tests for InlineKeyboardMarkupsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InlineKeyboardMarkupsFactory.INLINEKEYBOARDMARKUPS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InlineKeyboardMarkup):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InlineKeyboardMarkupsFactory.register_inline_keyboard_markup(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_keyboard_markup = mocker.MagicMock()
        mock_update.inline_keyboard_markup.inline_keyboard = "test_trigger"

        result = await InlineKeyboardMarkupsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_keyboard_markup = mocker.MagicMock()
        mock_update.inline_keyboard_markup.inline_keyboard = "unknown_trigger"

        assert await InlineKeyboardMarkupsFactory.create(mock_update) is None
