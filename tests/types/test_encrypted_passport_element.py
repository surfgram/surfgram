import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.encrypted_passport_element import EncryptedPassportElement
from surfgram.types.encrypted_passport_element.factory import (
    EncryptedPassportElementsFactory,
)


class TestEncryptedPassportElement:
    """Tests for EncryptedPassportElement base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            EncryptedPassportElement()

    @pytest.fixture
    def concrete_encrypted_passport_element(self):
        """Concrete EncryptedPassportElement implementation for testing."""

        class ConcreteEncryptedPassportElement(EncryptedPassportElement):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteEncryptedPassportElement()

    def test_concrete_instantiation(self, concrete_encrypted_passport_element):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_encrypted_passport_element, EncryptedPassportElement)


class TestEncryptedPassportElementsFactory:
    """Tests for EncryptedPassportElementsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        EncryptedPassportElementsFactory.ENCRYPTEDPASSPORTELEMENTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(EncryptedPassportElement):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        EncryptedPassportElementsFactory.register_encrypted_passport_element(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.encrypted_passport_element = MagicMock()
        mock_update.encrypted_passport_element.data = "test_trigger"

        result = await EncryptedPassportElementsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.encrypted_passport_element = MagicMock()
        mock_update.encrypted_passport_element.data = "unknown_trigger"

        assert await EncryptedPassportElementsFactory.create(mock_update) is None
