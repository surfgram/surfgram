import pytest
from surfgram.types.switch_inline_query_chosen_chat import SwitchInlineQueryChosenChat
from surfgram.types.switch_inline_query_chosen_chat.factory import (
    SwitchInlineQueryChosenChatsFactory,
)


class TestSwitchInlineQueryChosenChat:
    """Tests for SwitchInlineQueryChosenChat base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            SwitchInlineQueryChosenChat()

    @pytest.fixture
    def concrete_switch_inline_query_chosen_chat(self):
        """Concrete SwitchInlineQueryChosenChat implementation for testing."""

        class ConcreteSwitchInlineQueryChosenChat(SwitchInlineQueryChosenChat):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteSwitchInlineQueryChosenChat

    def test_concrete_instantiation(self, concrete_switch_inline_query_chosen_chat):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_switch_inline_query_chosen_chat()
        assert isinstance(instance, SwitchInlineQueryChosenChat)


class TestSwitchInlineQueryChosenChatsFactory:
    """Tests for SwitchInlineQueryChosenChatsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        SwitchInlineQueryChosenChatsFactory.SWITCHINLINEQUERYCHOSENCHATS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(SwitchInlineQueryChosenChat):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        SwitchInlineQueryChosenChatsFactory.register_switch_inline_query_chosen_chat(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.switch_inline_query_chosen_chat = mocker.MagicMock()
        mock_update.switch_inline_query_chosen_chat.query = "test_trigger"

        result = await SwitchInlineQueryChosenChatsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.switch_inline_query_chosen_chat = mocker.MagicMock()
        mock_update.switch_inline_query_chosen_chat.query = "unknown_trigger"

        assert await SwitchInlineQueryChosenChatsFactory.create(mock_update) is None
