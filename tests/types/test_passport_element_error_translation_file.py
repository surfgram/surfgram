import pytest
from surfgram.types.passport_element_error_translation_file import (
    PassportElementErrorTranslationFile,
)
from surfgram.types.passport_element_error_translation_file.factory import (
    PassportElementErrorTranslationFilesFactory,
)


class TestPassportElementErrorTranslationFile:
    """Tests for PassportElementErrorTranslationFile base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            PassportElementErrorTranslationFile()

    @pytest.fixture
    def concrete_passport_element_error_translation_file(self):
        """Concrete PassportElementErrorTranslationFile implementation for testing."""

        class ConcretePassportElementErrorTranslationFile(
            PassportElementErrorTranslationFile
        ):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcretePassportElementErrorTranslationFile

    def test_concrete_instantiation(
        self, concrete_passport_element_error_translation_file
    ):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_passport_element_error_translation_file()
        assert isinstance(instance, PassportElementErrorTranslationFile)


class TestPassportElementErrorTranslationFilesFactory:
    """Tests for PassportElementErrorTranslationFilesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        PassportElementErrorTranslationFilesFactory.PASSPORTELEMENTERRORTRANSLATIONFILES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(PassportElementErrorTranslationFile):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        PassportElementErrorTranslationFilesFactory.register_passport_element_error_translation_file(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.passport_element_error_translation_file = mocker.MagicMock()
        mock_update.passport_element_error_translation_file.source = "test_trigger"

        result = await PassportElementErrorTranslationFilesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.passport_element_error_translation_file = mocker.MagicMock()
        mock_update.passport_element_error_translation_file.source = "unknown_trigger"

        assert (
            await PassportElementErrorTranslationFilesFactory.create(mock_update)
            is None
        )
