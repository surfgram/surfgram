import pytest
from surfgram.types.birthdate import Birthdate
from surfgram.types.birthdate.factory import BirthdatesFactory


class TestBirthdate:
    """Tests for Birthdate base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            Birthdate()

    @pytest.fixture
    def concrete_birthdate(self):
        """Concrete Birthdate implementation for testing."""

        class ConcreteBirthdate(Birthdate):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteBirthdate

    def test_concrete_instantiation(self, concrete_birthdate):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_birthdate()
        assert isinstance(instance, Birthdate)


class TestBirthdatesFactory:
    """Tests for BirthdatesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BirthdatesFactory.BIRTHDATES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(Birthdate):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        BirthdatesFactory.register_birthdate(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.birthdate = mocker.MagicMock()
        mock_update.birthdate.day = "test_trigger"

        result = await BirthdatesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.birthdate = mocker.MagicMock()
        mock_update.birthdate.day = "unknown_trigger"

        assert await BirthdatesFactory.create(mock_update) is None
