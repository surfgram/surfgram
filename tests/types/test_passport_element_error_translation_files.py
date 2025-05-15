import pytest
from surfgram.types.passport_element_error_translation_files import (
    PassportElementErrorTranslationFiles,
)
from surfgram.types.passport_element_error_translation_files.factory import (
    PassportElementErrorTranslationFilesFactory,
)


class TestPassportElementErrorTranslationFiles:
    """Tests for PassportElementErrorTranslationFiles base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            PassportElementErrorTranslationFiles()

    @pytest.fixture
    def concrete_passport_element_error_translation_files(self):
        """Concrete PassportElementErrorTranslationFiles implementation for testing."""

        class ConcretePassportElementErrorTranslationFiles(
            PassportElementErrorTranslationFiles
        ):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcretePassportElementErrorTranslationFiles

    def test_concrete_instantiation(
        self, concrete_passport_element_error_translation_files
    ):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_passport_element_error_translation_files()
        assert isinstance(instance, PassportElementErrorTranslationFiles)


class TestPassportElementErrorTranslationFilesFactory:
    """Tests for PassportElementErrorTranslationFilesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        PassportElementErrorTranslationFilesFactory.PASSPORTELEMENTERRORTRANSLATIONFILES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(PassportElementErrorTranslationFiles):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        PassportElementErrorTranslationFilesFactory.register_passport_element_error_translation_files(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.passport_element_error_translation_files = mocker.MagicMock()
        mock_update.passport_element_error_translation_files.source = "test_trigger"

        result = await PassportElementErrorTranslationFilesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.passport_element_error_translation_files = mocker.MagicMock()
        mock_update.passport_element_error_translation_files.source = "unknown_trigger"

        assert (
            await PassportElementErrorTranslationFilesFactory.create(mock_update)
            is None
        )
