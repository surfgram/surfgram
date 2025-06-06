import pytest
from surfgram.types.message_auto_delete_timer_changed import (
    MessageAutoDeleteTimerChanged,
)
from surfgram.types.message_auto_delete_timer_changed.factory import (
    MessageAutoDeleteTimerChangedsFactory,
)


class TestMessageAutoDeleteTimerChanged:
    """Tests for MessageAutoDeleteTimerChanged base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            MessageAutoDeleteTimerChanged()

    @pytest.fixture
    def concrete_message_auto_delete_timer_changed(self):
        """Concrete MessageAutoDeleteTimerChanged implementation for testing."""

        class ConcreteMessageAutoDeleteTimerChanged(MessageAutoDeleteTimerChanged):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteMessageAutoDeleteTimerChanged

    def test_concrete_instantiation(self, concrete_message_auto_delete_timer_changed):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_message_auto_delete_timer_changed()
        assert isinstance(instance, MessageAutoDeleteTimerChanged)


class TestMessageAutoDeleteTimerChangedsFactory:
    """Tests for MessageAutoDeleteTimerChangedsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        MessageAutoDeleteTimerChangedsFactory.MESSAGEAUTODELETETIMERCHANGEDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(MessageAutoDeleteTimerChanged):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        MessageAutoDeleteTimerChangedsFactory.register_message_auto_delete_timer_changed(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.message_auto_delete_timer_changed = mocker.MagicMock()
        mock_update.message_auto_delete_timer_changed.message_auto_delete_time = (
            "test_trigger"
        )

        result = await MessageAutoDeleteTimerChangedsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.message_auto_delete_timer_changed = mocker.MagicMock()
        mock_update.message_auto_delete_timer_changed.message_auto_delete_time = (
            "unknown_trigger"
        )

        assert await MessageAutoDeleteTimerChangedsFactory.create(mock_update) is None
