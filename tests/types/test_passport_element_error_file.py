import pytest
from surfgram.types.passport_element_error_file import PassportElementErrorFile
from surfgram.types.passport_element_error_file.factory import (
    PassportElementErrorFilesFactory,
)


class TestPassportElementErrorFile:
    """Tests for PassportElementErrorFile base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            PassportElementErrorFile()

    @pytest.fixture
    def concrete_passport_element_error_file(self):
        """Concrete PassportElementErrorFile implementation for testing."""

        class ConcretePassportElementErrorFile(PassportElementErrorFile):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcretePassportElementErrorFile

    def test_concrete_instantiation(self, concrete_passport_element_error_file):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_passport_element_error_file()
        assert isinstance(instance, PassportElementErrorFile)


class TestPassportElementErrorFilesFactory:
    """Tests for PassportElementErrorFilesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        PassportElementErrorFilesFactory.PASSPORTELEMENTERRORFILES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(PassportElementErrorFile):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        PassportElementErrorFilesFactory.register_passport_element_error_file(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.passport_element_error_file = mocker.MagicMock()
        mock_update.passport_element_error_file.source = "test_trigger"

        result = await PassportElementErrorFilesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.passport_element_error_file = mocker.MagicMock()
        mock_update.passport_element_error_file.source = "unknown_trigger"

        assert await PassportElementErrorFilesFactory.create(mock_update) is None
