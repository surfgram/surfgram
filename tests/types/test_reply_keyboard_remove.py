import pytest
from surfgram.types.reply_keyboard_remove import ReplyKeyboardRemove
from surfgram.types.reply_keyboard_remove.factory import ReplyKeyboardRemovesFactory


class TestReplyKeyboardRemove:
    """Tests for ReplyKeyboardRemove base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ReplyKeyboardRemove()

    @pytest.fixture
    def concrete_reply_keyboard_remove(self):
        """Concrete ReplyKeyboardRemove implementation for testing."""

        class ConcreteReplyKeyboardRemove(ReplyKeyboardRemove):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteReplyKeyboardRemove

    def test_concrete_instantiation(self, concrete_reply_keyboard_remove):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_reply_keyboard_remove()
        assert isinstance(instance, ReplyKeyboardRemove)


class TestReplyKeyboardRemovesFactory:
    """Tests for ReplyKeyboardRemovesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ReplyKeyboardRemovesFactory.REPLYKEYBOARDREMOVES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ReplyKeyboardRemove):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ReplyKeyboardRemovesFactory.register_reply_keyboard_remove(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.reply_keyboard_remove = mocker.MagicMock()
        mock_update.reply_keyboard_remove.remove_keyboard = "test_trigger"

        result = await ReplyKeyboardRemovesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.reply_keyboard_remove = mocker.MagicMock()
        mock_update.reply_keyboard_remove.remove_keyboard = "unknown_trigger"

        assert await ReplyKeyboardRemovesFactory.create(mock_update) is None
