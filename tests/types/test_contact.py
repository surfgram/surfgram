import pytest
from surfgram.types.contact import Contact
from surfgram.types.contact.factory import ContactsFactory


class TestContact:
    """Tests for Contact base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            Contact()

    @pytest.fixture
    def concrete_contact(self):
        """Concrete Contact implementation for testing."""

        class ConcreteContact(Contact):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteContact

    def test_concrete_instantiation(self, concrete_contact):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_contact()
        assert isinstance(instance, Contact)


class TestContactsFactory:
    """Tests for ContactsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ContactsFactory.CONTACTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(Contact):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ContactsFactory.register_contact(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.contact = mocker.MagicMock()
        mock_update.contact.phone_number = "test_trigger"

        result = await ContactsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.contact = mocker.MagicMock()
        mock_update.contact.phone_number = "unknown_trigger"

        assert await ContactsFactory.create(mock_update) is None
