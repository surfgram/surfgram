import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.passport_element_error_files import PassportElementErrorFiles
from surfgram.types.passport_element_error_files.factory import (
    PassportElementErrorFilesFactory,
)


class TestPassportElementErrorFiles:
    """Tests for PassportElementErrorFiles base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            PassportElementErrorFiles()

    @pytest.fixture
    def concrete_passport_element_error_files(self):
        """Concrete PassportElementErrorFiles implementation for testing."""

        class ConcretePassportElementErrorFiles(PassportElementErrorFiles):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcretePassportElementErrorFiles()

    def test_concrete_instantiation(self, concrete_passport_element_error_files):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(
            concrete_passport_element_error_files, PassportElementErrorFiles
        )


class TestPassportElementErrorFilesFactory:
    """Tests for PassportElementErrorFilesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        PassportElementErrorFilesFactory.PASSPORTELEMENTERRORFILES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(PassportElementErrorFiles):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        PassportElementErrorFilesFactory.register_passport_element_error_files(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.passport_element_error_files = MagicMock()
        mock_update.passport_element_error_files.source = "test_trigger"

        result = await PassportElementErrorFilesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.passport_element_error_files = MagicMock()
        mock_update.passport_element_error_files.source = "unknown_trigger"

        assert await PassportElementErrorFilesFactory.create(mock_update) is None
