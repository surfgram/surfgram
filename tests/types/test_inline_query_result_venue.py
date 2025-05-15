import pytest
from surfgram.types.inline_query_result_venue import InlineQueryResultVenue
from surfgram.types.inline_query_result_venue.factory import (
    InlineQueryResultVenuesFactory,
)


class TestInlineQueryResultVenue:
    """Tests for InlineQueryResultVenue base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InlineQueryResultVenue()

    @pytest.fixture
    def concrete_inline_query_result_venue(self):
        """Concrete InlineQueryResultVenue implementation for testing."""

        class ConcreteInlineQueryResultVenue(InlineQueryResultVenue):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInlineQueryResultVenue

    def test_concrete_instantiation(self, concrete_inline_query_result_venue):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_inline_query_result_venue()
        assert isinstance(instance, InlineQueryResultVenue)


class TestInlineQueryResultVenuesFactory:
    """Tests for InlineQueryResultVenuesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InlineQueryResultVenuesFactory.INLINEQUERYRESULTVENUES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InlineQueryResultVenue):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InlineQueryResultVenuesFactory.register_inline_query_result_venue(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_result_venue = mocker.MagicMock()
        mock_update.inline_query_result_venue.title = "test_trigger"

        result = await InlineQueryResultVenuesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_result_venue = mocker.MagicMock()
        mock_update.inline_query_result_venue.title = "unknown_trigger"

        assert await InlineQueryResultVenuesFactory.create(mock_update) is None
