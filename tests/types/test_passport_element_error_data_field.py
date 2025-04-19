import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.passport_element_error_data_field import (
    PassportElementErrorDataField,
)
from surfgram.types.passport_element_error_data_field.factory import (
    PassportElementErrorDataFieldsFactory,
)


class TestPassportElementErrorDataField:
    """Tests for PassportElementErrorDataField base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            PassportElementErrorDataField()

    @pytest.fixture
    def concrete_passport_element_error_data_field(self):
        """Concrete PassportElementErrorDataField implementation for testing."""

        class ConcretePassportElementErrorDataField(PassportElementErrorDataField):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcretePassportElementErrorDataField()

    def test_concrete_instantiation(self, concrete_passport_element_error_data_field):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(
            concrete_passport_element_error_data_field, PassportElementErrorDataField
        )


class TestPassportElementErrorDataFieldsFactory:
    """Tests for PassportElementErrorDataFieldsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        PassportElementErrorDataFieldsFactory.PASSPORTELEMENTERRORDATAFIELDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(PassportElementErrorDataField):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        PassportElementErrorDataFieldsFactory.register_passport_element_error_data_field(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.passport_element_error_data_field = MagicMock()
        mock_update.passport_element_error_data_field.data_hash = "test_trigger"

        result = await PassportElementErrorDataFieldsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.passport_element_error_data_field = MagicMock()
        mock_update.passport_element_error_data_field.data_hash = "unknown_trigger"

        assert await PassportElementErrorDataFieldsFactory.create(mock_update) is None
