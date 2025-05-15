import pytest
from surfgram.types.inline_query_result_contact import InlineQueryResultContact
from surfgram.types.inline_query_result_contact.factory import (
    InlineQueryResultContactsFactory,
)


class TestInlineQueryResultContact:
    """Tests for InlineQueryResultContact base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InlineQueryResultContact()

    @pytest.fixture
    def concrete_inline_query_result_contact(self):
        """Concrete InlineQueryResultContact implementation for testing."""

        class ConcreteInlineQueryResultContact(InlineQueryResultContact):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteInlineQueryResultContact

    def test_concrete_instantiation(self, concrete_inline_query_result_contact):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_inline_query_result_contact()
        assert isinstance(instance, InlineQueryResultContact)


class TestInlineQueryResultContactsFactory:
    """Tests for InlineQueryResultContactsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InlineQueryResultContactsFactory.INLINEQUERYRESULTCONTACTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InlineQueryResultContact):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        InlineQueryResultContactsFactory.register_inline_query_result_contact(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_result_contact = mocker.MagicMock()
        mock_update.inline_query_result_contact.phone_number = "test_trigger"

        result = await InlineQueryResultContactsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.inline_query_result_contact = mocker.MagicMock()
        mock_update.inline_query_result_contact.phone_number = "unknown_trigger"

        assert await InlineQueryResultContactsFactory.create(mock_update) is None
