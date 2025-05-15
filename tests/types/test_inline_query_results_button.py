import pytest
from surfgram.types.inline_query_results_button import InlineQueryResultsButton
from surfgram.types.inline_query_results_button.factory import (
    InlineQueryResultsButtonsFactory,
)


class TestInlineQueryResultsButton:
    """Tests for InlineQueryResultsButton base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InlineQueryResultsButton()

    @pytest.fixture
    def concrete_inline_query_results_button(self):
        """Concrete InlineQueryResultsButton implementation for testing."""

        class ConcreteInlineQueryResultsButton(InlineQueryResultsButton):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInlineQueryResultsButton

    def test_concrete_instantiation(self, concrete_inline_query_results_button):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_inline_query_results_button()
        assert isinstance(instance, InlineQueryResultsButton)


class TestInlineQueryResultsButtonsFactory:
    """Tests for InlineQueryResultsButtonsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InlineQueryResultsButtonsFactory.INLINEQUERYRESULTSBUTTONS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InlineQueryResultsButton):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InlineQueryResultsButtonsFactory.register_inline_query_results_button(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_results_button = mocker.MagicMock()
        mock_update.inline_query_results_button.text = "test_trigger"

        result = await InlineQueryResultsButtonsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_results_button = mocker.MagicMock()
        mock_update.inline_query_results_button.text = "unknown_trigger"

        assert await InlineQueryResultsButtonsFactory.create(mock_update) is None
