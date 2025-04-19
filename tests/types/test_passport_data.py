import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.passport_data import PassportData
from surfgram.types.passport_data.factory import PassportDataFactory


class TestPassportData:
    """Tests for PassportData base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            PassportData()

    @pytest.fixture
    def concrete_passport_data(self):
        """Concrete PassportData implementation for testing."""

        class ConcretePassportData(PassportData):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcretePassportData()

    def test_concrete_instantiation(self, concrete_passport_data):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_passport_data, PassportData)


class TestPassportDataFactory:
    """Tests for PassportDataFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        PassportDataFactory.PASSPORTDATA_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(PassportData):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        PassportDataFactory.register_passport_data(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.passport_data = MagicMock()
        mock_update.passport_data.data = "test_trigger"

        result = await PassportDataFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.passport_data = MagicMock()
        mock_update.passport_data.data = "unknown_trigger"

        assert await PassportDataFactory.create(mock_update) is None
