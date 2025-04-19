import pytest
from unittest.mock import AsyncMock, MagicMock
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
            __callback__ = AsyncMock()

        return ConcreteBirthdate()

    def test_concrete_instantiation(self, concrete_birthdate):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_birthdate, Birthdate)


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
            __callback__ = AsyncMock()

        BirthdatesFactory.register_birthdate(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.birthdate = MagicMock()
        mock_update.birthdate.day = "test_trigger"

        result = await BirthdatesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.birthdate = MagicMock()
        mock_update.birthdate.day = "unknown_trigger"

        assert await BirthdatesFactory.create(mock_update) is None
