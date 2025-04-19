import pytest
from unittest.mock import AsyncMock, MagicMock
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
            __callback__ = AsyncMock()

        return ConcreteSwitchInlineQueryChosenChat()

    def test_concrete_instantiation(self, concrete_switch_inline_query_chosen_chat):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(
            concrete_switch_inline_query_chosen_chat, SwitchInlineQueryChosenChat
        )


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
            __callback__ = AsyncMock()

        SwitchInlineQueryChosenChatsFactory.register_switch_inline_query_chosen_chat(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.switch_inline_query_chosen_chat = MagicMock()
        mock_update.switch_inline_query_chosen_chat.query = "test_trigger"

        result = await SwitchInlineQueryChosenChatsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.switch_inline_query_chosen_chat = MagicMock()
        mock_update.switch_inline_query_chosen_chat.query = "unknown_trigger"

        assert await SwitchInlineQueryChosenChatsFactory.create(mock_update) is None
