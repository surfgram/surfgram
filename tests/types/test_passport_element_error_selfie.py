import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.passport_element_error_selfie import PassportElementErrorSelfie
from surfgram.types.passport_element_error_selfie.factory import (
    PassportElementErrorSelfiesFactory,
)


class TestPassportElementErrorSelfie:
    """Tests for PassportElementErrorSelfie base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            PassportElementErrorSelfie()

    @pytest.fixture
    def concrete_passport_element_error_selfie(self):
        """Concrete PassportElementErrorSelfie implementation for testing."""

        class ConcretePassportElementErrorSelfie(PassportElementErrorSelfie):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcretePassportElementErrorSelfie()

    def test_concrete_instantiation(self, concrete_passport_element_error_selfie):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(
            concrete_passport_element_error_selfie, PassportElementErrorSelfie
        )


class TestPassportElementErrorSelfiesFactory:
    """Tests for PassportElementErrorSelfiesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        PassportElementErrorSelfiesFactory.PASSPORTELEMENTERRORSELFIES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(PassportElementErrorSelfie):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        PassportElementErrorSelfiesFactory.register_passport_element_error_selfie(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.passport_element_error_selfie = MagicMock()
        mock_update.passport_element_error_selfie.source = "test_trigger"

        result = await PassportElementErrorSelfiesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.passport_element_error_selfie = MagicMock()
        mock_update.passport_element_error_selfie.source = "unknown_trigger"

        assert await PassportElementErrorSelfiesFactory.create(mock_update) is None
